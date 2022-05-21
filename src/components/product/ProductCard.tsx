import React from 'react';
import styles from './ProductCard.styles';
import {Image, Text, View} from 'react-native';
import {Product} from '../../types/entity/product';
import {RatingBar} from '../rating-bar/RatingBar';

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({product}) => {
  const {
    title,
    image,
    price: {main, deal},
    review: {stars, people},
  } = product;
  const offPrice = main && deal ? parseFloat((main - deal).toFixed(2)) : 0;
  const offPercent = offPrice > 0 ? Math.round((offPrice * 100.0) / main) : 0;
  return (
    <View style={styles.card}>
      {offPercent > 0 && (
        <View style={styles.offBadge}>
          <Text style={styles.offBadgeText}>{`${offPercent}`}%</Text>
        </View>
      )}
      <View style={styles.details}>
        <RatingBar voteCount={people} rate={stars} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.prices}>
          {offPrice > 0 ? (
            <>
              <Text style={styles.offPrice}>${offPrice} off</Text>
              <Text style={styles.price}>${deal}</Text>
            </>
          ) : (
            <Text style={styles.price}>${main}</Text>
          )}
        </View>
      </View>
      <View style={styles.preview}>
        <Image
          style={styles.image}
          source={{uri: image}}
          resizeMode={'contain'}
        />
      </View>
    </View>
  );
};
