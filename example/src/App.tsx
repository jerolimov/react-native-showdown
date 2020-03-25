import React from 'react';
import Markdown from 'react-native-showdown';
import { SafeAreaView, StyleSheet } from 'react-native';

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
    <SafeAreaView style={styles.container}>
      <Markdown markdown={markdown} css={css} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
