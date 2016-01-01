# react-showdown [![Build status][travis-image]][travis-url] [![Test coverage][coveralls-image]][coveralls-url] [![Dependency Status][dependency-image]][dependency-url]

> [React-native](http://facebook.github.io/react-native/) component which renders markdown into a webview!

### Features

* **Renders Markdown into a react-native WebView component.**
* **Automatically opens links in the system browser.**
* Customization with pure CSS.

### Installation

```bash
npm install --save react-native-showdown
```

### Use as React component

Really simple markdown example with ES6/JSX:

```jsx
import Markdown from 'react-native-showdown';

render: () => {
    var markdown = '# Hello\n\nMore content...';
    return <Markdown body={ markdown } />
}
```

### Available props / converter options

Converter options will be pushed forward to the showdown converter, please
checkout the [valid options section](https://github.com/showdownjs/showdown#valid-options).

Just the `components` option is managed by this converter.
It define the component name (tag name) to component React class definition
(instance of React.createClass) mapping. See example above.

### Credits

Project is based on the markdown parser [Showdown](https://github.com/showdownjs/showdown).

### Alternatives

* [react-native-markdown](https://github.com/lwansbrough/react-native-markdown)
  which tries to render markdown as native components (instead of using a WebView).

[travis-image]: https://img.shields.io/travis/jerolimov/react-native-showdown/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/jerolimov/react-native-showdown
[coveralls-image]: https://img.shields.io/coveralls/jerolimov/react-native-showdown/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/jerolimov/react-native-showdown
[dependency-image]: http://img.shields.io/david/jerolimov/react-native-showdown.svg?style=flat-square
[dependency-url]: https://david-dm.org/jerolimov/react-native-showdown
