import React from 'react';
import {Text, View} from 'react-native';
// import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './RatingBar.styles';

interface Props {
  voteCount: number;
  rate: number;
  size?: number;
}

const MaterialIcon: React.FC<{
  style: any;
  name: string;
  size: number;
}> = () => {
  return <Text>-</Text>;
};

export const RatingBar: React.FC<Props> = ({voteCount, rate, size = 16}) => {
  const fullStarCount = Math.floor(rate);
  const halfStarCount = rate - Math.floor(rate) >= 0.5 ? 1 : 0;
  const nullStarCount = 5 - halfStarCount - fullStarCount;

  return (
    <View style={styles.bar}>
      {fullStarCount > 0 &&
        [...Array(fullStarCount)].map((_, i) => (
          <MaterialIcon key={i} style={styles.star} name="star" size={size} />
        ))}
      {halfStarCount === 1 && (
        <MaterialIcon style={styles.star} name="star-half-full" size={size} />
      )}
      {nullStarCount > 0 &&
        [...Array(nullStarCount)].map((_, i) => (
          <MaterialIcon
            key={i}
            style={styles.star}
            name="star-outline"
            size={size}
          />
        ))}
      <Text> {voteCount}</Text>
    </View>
  );
};
