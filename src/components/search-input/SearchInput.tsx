import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

import styles from './SearchInput.styles';

export const SearchInput = React.forwardRef<TextInput, TextInputProps>(
  (props, ref) => {
    return <TextInput ref={ref} style={styles.input} {...props} />;
  },
);
