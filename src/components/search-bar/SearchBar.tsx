import React, {useCallback} from 'react';
import {View} from 'react-native';
import styles from './SearchBar.styles';
import {SearchInput} from '../search-input/SearchInput';
import {SearchButton} from '../search-button/SearchButton';
import {useNavigation} from '@react-navigation/native';
import {MainScreenStackNavigationProp} from '../../types/MainScreenStackNavigationProp';

interface Props {}

export const SearchBar: React.FC<Props> = () => {
  const navigation = useNavigation<MainScreenStackNavigationProp>();

  const onPressSearchHandler = useCallback(() => {
    navigation.navigate('Search');
  }, [navigation]);

  return (
    <View style={styles.bar}>
      <SearchInput />
      <SearchButton onPress={onPressSearchHandler} />
    </View>
  );
};
