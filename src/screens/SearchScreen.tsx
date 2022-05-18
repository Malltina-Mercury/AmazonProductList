import React from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {SearchScreenRouteProp} from '../types/navigation/search-screen-navigation';
import {useSearchApi} from '../hooks/useSearchApi';

interface Props {}

export const SearchScreen: React.FC<Props> = () => {
  const {params} = useRoute<SearchScreenRouteProp>();

  const [data] = useSearchApi({q: params.query}, [params.query]);

  return (
    <View>
      <View>
        <Text>{JSON.stringify(data)}</Text>
      </View>
    </View>
  );
};
