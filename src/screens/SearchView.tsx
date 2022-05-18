import React from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {SearchScreenRouteProp} from '../types/navigation/search-screen-navigation';

interface Props {}

export const SearchView: React.FC<Props> = () => {
  const {params} = useRoute<SearchScreenRouteProp>();
  return (
    <View>
      <View>
        <Text>Search {params.query}</Text>
      </View>
    </View>
  );
};
