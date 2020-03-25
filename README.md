# react-native-showdown [![Dependency Status][dependency-image]][dependency-url]

[React-native](http://facebook.github.io/react-native/) component which renders markdown into a webview!

Since version 1.0.0 it requires the peer dependency [react-native-webview](https://github.com/react-native-community/react-native-webview).

## Features

* Pure JavaScript implementation. No native code required. (No react-native link.)
* Renders Markdown into a react-native WebView component.
* Customizable with CSS.
* Full TypeScript Support.
* ~~Automatically opens links in the system browser.~~

## Installation

```bash
npm install --save react-native-showdown react-native-webview
```

or

```bash
yarn add react-native-showdown react-native-webview
```

## Usage

Full markdown example with ES6/JSX or TypeScript:

```jsx
import React from 'react';
import Markdown from 'react-native-showdown';
import { SafeAreaView } from 'react-native';

export default function App() {
  const markdown = `
# Welcome to React Native Showdown!

To get started, edit the markdown in \`App.tsx\`.

| Column 1 | Column 2 |
|----------|----------|
| A1       | B1       |
| A2       | B2       |
`;

  const css = `
h1 { color: red; }
code { font-size: 1.2rem; background-color: lightgray; }
`;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Markdown markdown={markdown} css={css} />
    </SafeAreaView>
  );
}
```

## Available props / converter options

* `markdown` String, required, markdown body which will be shown as webview content.
* `css` String, optional, CSS which will be used to style the webview content.
* All other [react-native-webview](https://github.com/react-native-community/react-native-webview) props.
* `options` Object, optional (default `{simplifiedAutoLink: true, strikethrough: true, tables: true}`), see [Showdown#options](https://github.com/showdownjs/showdown#valid-options)

## Run the example

```bash
git clone https://github.com/jerolimov/react-native-showdown.git
cd react-native-showdown
yarn install
yarn bootstrap   # which is similar to   cd example && yarn install

cd example
yarn ios         # or
yarn android
```

## Credits

Project is based on the markdown parser [Showdown](https://github.com/showdownjs/showdown).

## Alternatives

Libraries that renders Markdown as native components instead of using a WebView:

* [react-native-render-html](https://github.com/archriss/react-native-render-html)
* [react-native-markdown](https://github.com/lwansbrough/react-native-markdown)
* [react-native-htmlview](https://github.com/jsdf/react-native-htmlview)

[travis-image]: https://img.shields.io/travis/jerolimov/react-native-showdown/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/jerolimov/react-native-showdown
[coveralls-image]: https://img.shields.io/coveralls/jerolimov/react-native-showdown/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/jerolimov/react-native-showdown
[dependency-image]: http://img.shields.io/david/jerolimov/react-native-showdown.svg?style=flat-square
[dependency-url]: https://david-dm.org/jerolimov/react-native-showdown
