import React from 'react';
import {Button, GestureResponderEvent} from 'react-native';

interface Props {
  onPress?: (event: GestureResponderEvent) => void;
}

export const SearchButton: React.FC<Props> = ({onPress}) => {
  return <Button title="Search" onPress={onPress} />;
};
