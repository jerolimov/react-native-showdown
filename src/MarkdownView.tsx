import React from 'react';
import WebView, { WebViewProps } from 'react-native-webview';
import { Converter, ConverterOptions } from 'showdown';

import defaultHTML from './defaultHTML';

export interface MarkdownViewProps extends WebViewProps {
  markdown: string;
  body?: string;
  css?: string;
  pureCSS?: string;
  options?: ConverterOptions;
}

export default function MarkdownView({
  markdown,
  body,
  css,
  pureCSS,
  options,
  ...rest
}: MarkdownViewProps) {
  options = {
    simplifiedAutoLink: true,
    strikethrough: true,
    tables: true,
    ...options,
  };

  const html = defaultHTML
    .replace('$title', '')
    .replace('$body', new Converter(options).makeHtml(markdown || body || ''))
    .replace('$pureCSS', css || pureCSS || '');

  return <WebView {...rest} source={{ html, baseUrl: 'about:blank' }} />;
}
