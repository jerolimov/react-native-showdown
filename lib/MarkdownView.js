import React, { Component,} from 'react';
import { View, Text, WebView, StyleSheet, Linking } from 'react-native';
import showdown from 'showdown';

import defaultHTML from './defaultHTML';

class MarkdownView extends Component {

	static defaultShowdownOptions = {
		simplifiedAutoLink: true,
		strikethrough: true,
		tables: true,
	};

	state = { html: null };
	converter = null;

	componentWillMount()
	{
		this._instantiateShowdownConverter(this.props.options);
		this._convertMarkdown(this.props.body);
	}

	componentWillReceiveProps(nextProps)
	{
		(this.props.options !== nextProps.options) && this._instantiateShowdownConverter(nextProps.options);
		(this.props.body !== nextProps.body) && this._convertMarkdown(nextProps.body);
	}

	_instantiateShowdownConverter(options)
	{
		this.converter = new showdown.Converter({...this.constructor.defaultShowdownOptions, ...options});
	}

	_convertMarkdown(markdownString)
	{
		this.setState({html: this.converter.makeHtml(markdownString)});
	}

	render() {
		const { pureCSS, automaticallyAdjustContentInsets, style } = this.props;

		return (
			<WebView
				ref={'WebView'}
				source={{
					html: defaultHTML
							.replace('$title', '')
							.replace('$body', this.state.html)
							.replace('$pureCSS', pureCSS),
					baseUrl: 'about:blank',
				}}
				automaticallyAdjustContentInsets={ automaticallyAdjustContentInsets }
				onNavigationStateChange={ this.onNavigationStateChange.bind(this) }
				style={ style }
			/>
		);
	}

    onNavigationStateChange(navState) {
		if (navState.url !== 'about:blank') {
			this.refs.WebView.stopLoading();
			Linking.openURL(navState.url);
		}
	}
}

MarkdownView.propTypes = {
	title: React.PropTypes.string,
	body: React.PropTypes.string.isRequired,
	pureCSS: React.PropTypes.string,
	options: React.PropTypes.object,
	automaticallyAdjustContentInsets: React.PropTypes.bool,
	style: View.propTypes.style,
};

MarkdownView.defaultProps = {
	title: '',
	pureCSS: '',
	options: {},
	style: {
		flex: 1,
	},
};

module.exports = MarkdownView;
