import React from 'react';
import {View} from 'react-native';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import {MainScreenStackNavigationProp} from '../types/MainScreenStackNavigationProp';
import {SearchInput} from '../components/search-input/SearchInput';

interface Props {}

export const MainScreen: React.FC<Props> = () => {
  const navigation = useNavigation<MainScreenStackNavigationProp>();
  return (
    <View style={tw`p-2 flex-1`}>
      <SearchInput
        onSubmit={query => {}}
        searchQuery={'ss'}
        onChange={query => {}}
      />
    </View>
  );
};
