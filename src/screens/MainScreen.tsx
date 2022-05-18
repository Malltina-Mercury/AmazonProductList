import React from 'react';
import {View} from 'react-native';
import tw from 'twrnc';
import {SearchBar} from '../components/search-bar/SearchBar';

interface Props {}

export const MainScreen: React.FC<Props> = () => {
  return (
    <View style={tw`flex-1`}>
      <SearchBar />
    </View>
  );
};
