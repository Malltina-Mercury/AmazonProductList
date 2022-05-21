import React from 'react';
import {Text, View} from 'react-native';

import styles from './Loading.styles';

interface Props {}

export const Loading: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
};
