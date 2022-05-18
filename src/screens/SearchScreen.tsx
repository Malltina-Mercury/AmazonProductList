import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {SearchScreenRouteProp} from '../types/navigation/search-screen-navigation';
import {useSearchApi} from '../hooks/useSearchApi';
import {ProductCard} from '../components/product/ProductCard';

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
          <ScrollView>
            {data?.products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
};
