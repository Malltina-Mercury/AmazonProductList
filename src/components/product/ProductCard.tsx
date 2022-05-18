import React from 'react';
import styles from './ProductCard.styles';
import {Image, Text, View} from 'react-native';
import {Product} from '../../types/entity/product';

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({product}) => {
  const {
    title,
    image,
    price: {main, deal},
    // review: {stars, people},
  } = product;
  return (
    <View style={styles.card}>
      <View style={styles.details}>
        <Text>{title}</Text>
        <View style={styles.prices}>
          <Text style={styles.mainPrice}>{main}</Text>
          <Text style={styles.dealPrice}>{deal}</Text>
        </View>
      </View>
      <View style={styles.preview}>
        <Image style={styles.image} source={{uri: image}} />
      </View>
    </View>
  );
};
