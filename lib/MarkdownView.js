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

	converter = null;

	componentWillMount()
	{
		this._instantiateShowdownConverter(this.props.options);
	}

	componentWillReceiveProps(nextProps)
	{
		if(this.props.options !== nextProps.options)
		{
			this._instantiateShowdownConverter(nextProps);
		}
	}

	_instantiateShowdownConverter(options)
	{
		this.converter = new showdown.Converter({...this.constructor.defaultShowdownOptions, ...options});
	}

	render() {
		const { title, body, pureCSS, automaticallyAdjustContentInsets, style } = this.props;

		const html = defaultHTML
			.replace('$title', '')
			.replace('$body', this.converter.makeHtml(body))
			.replace('$pureCSS', pureCSS);

		return (
			<WebView
				ref={'WebView'}
				source={{ html: html + '' }}
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
