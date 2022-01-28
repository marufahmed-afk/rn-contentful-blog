import React from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
} from 'react-native';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
  input: {
    color: 'black',
    fontSize: 16,
    backgroundColor: colors.lightGray,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
    textAlignVertical: 'top',
  },
});

interface CustomTextInputProps extends TextInputProps {
  type?: 'header' | 'subheader';
  icon?: string;
}

export const TextInput = ({ icon, ...otherProps }: CustomTextInputProps) => {
  return <RNTextInput style={styles.input} {...otherProps} />;
};
