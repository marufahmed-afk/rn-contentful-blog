import React from 'react';
import { StyleSheet, Text as RNText, StyleProp, TextStyle } from 'react-native';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 16,
  },
  headerText: {
    fontWeight: '600',
    fontSize: 24,
  },
  subHeaderText: {
    color: 'black',
    fontSize: 18,
  },
  errorText: {
    color: colors.error,
    fontSize: 14,

    // marginLeft: 15,
  },
});

type TextProps = {
  type?: 'header' | 'subheader' | 'error';
  children: string;
  style?: StyleProp<TextStyle>[];
};

export const Text = ({ type, children, style = [] }: TextProps) => {
  let textStyles: StyleProp<TextStyle>[] = [styles.text];

  if (type === 'header') {
    textStyles.push(styles.headerText);
  } else if (type === 'subheader') {
    textStyles.push(styles.subHeaderText);
  } else if (type === 'error') {
    textStyles.push(styles.errorText);
  }

  textStyles = [...textStyles, ...style];

  return <RNText style={textStyles}>{children}</RNText>;
};
