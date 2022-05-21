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
  const dealPercent =
    main && deal
      ? Math.round((parseFloat(deal) * 100.0) / parseFloat(main))
      : 0;
  return (
    <View style={styles.card}>
      {dealPercent > 0 && (
        <View style={styles.offBadge}>
          <Text style={styles.offBadgeText}>{`${dealPercent}`}%</Text>
        </View>
      )}
      <View style={styles.details}>
        <RatingBar voteCount={parseInt(people)} rate={parseFloat(stars)} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.prices}>
          {main && <Text style={styles.mainPrice}>({main})</Text>}
          {deal && <Text style={styles.offPrice}>({deal})</Text>}
        </View>
      </View>
      <View style={styles.preview}>
        <Image style={styles.image} source={{uri: image}} />
      </View>
    </View>
  );
};
