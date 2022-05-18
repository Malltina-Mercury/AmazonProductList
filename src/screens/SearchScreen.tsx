import React from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {SearchScreenRouteProp} from '../types/navigation/search-screen-navigation';
import {useSearchApi} from '../hooks/useSearchApi';

interface Props {}

export const SearchScreen: React.FC<Props> = () => {
  const {params} = useRoute<SearchScreenRouteProp>();

  const [data, isLoaded] = useSearchApi({q: params.query}, [params.query]);

  return (
    <View>
      <View>
        {!isLoaded ? (
          <Text>Loading</Text>
        ) : (
          <View>
            {data?.products.map(product => (
              <Text key={product.id}>{product.title}</Text>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};
