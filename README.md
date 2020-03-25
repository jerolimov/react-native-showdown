# react-native-showdown [![Dependency Status][dependency-image]][dependency-url]

[React-native](http://facebook.github.io/react-native/) component which renders markdown into a webview!

Since version 1.0.0 it requires the peer dependency [react-native-webview](https://github.com/react-native-community/react-native-webview).

## Features

* Renders Markdown into a React Native WebView component.
* Pure JavaScript implementation, based on [Showdown](https://github.com/showdownjs/showdown),
  extendable with all (?) [Showdown Extensions](https://github.com/showdownjs/showdown/wiki/Extensions).
* No native code / No react-native link required.
* Customizable with CSS.
* Full TypeScript Support.
* ~~Automatically opens links in the system browser.~~ Supports all React Native WebView props and callbacks!

## Installation

```bash
npm install --save react-native-showdown react-native-webview
```

or

```bash
yarn add react-native-showdown react-native-webview
```

With expo you are done.

With a pure React Native project you need to link react-native-webview:

```bash
react-native link react-native-webview
cd pods && pod install && cd ..
```

## Usage

Full ES6 / TypeScript example:

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

* `markdown` String, required;
  Markdown string which will be shown as webview content.
  (Previous prop `body` is also still supported as fallback.)
* `css` String, optional;
  CSS which will be used to style the webview content.
  (Previous prop `pureCSS` is also still supported as fallback.)
* `title` String, optional;
  Sets the HTML title tag.
* `options` ConverterOptions, optional;
  All [Showdown#options](https://github.com/showdownjs/showdown#valid-options). 
  Default is `{simplifiedAutoLink: true, strikethrough: true, tables: true}`.
* All other [react-native-webview](https://github.com/react-native-community/react-native-webview)
  [props](https://github.com/react-native-community/react-native-webview/blob/master/docs/Reference.md#props-index) and callbacks are also supported, expect the `source` prop!
* Notice that the WebView has a default `{ flex: 1 }` style defined.

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

## License

MIT License

Copyright (c) 2016-2020 Christoph Jerolimov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

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
