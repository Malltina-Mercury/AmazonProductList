import React, {useCallback, useState} from 'react';
import {TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {MainScreenNavigationProp} from '../../types/navigation/main-screen-navigation';
import styles from './SearchBar.styles';

interface Props {}

export const SearchBar: React.FC<Props> = () => {
  const navigation = useNavigation<MainScreenNavigationProp>();
  const [query, setQuery] = useState<string>('');

  const onChangeQueryText = useCallback(
    (queryText: string) => {
      setQuery(queryText);
    },
    [setQuery],
  );

  const onPressSearchHandler = useCallback(() => {
    navigation.navigate('Search', {query: query});
  }, [navigation, query]);

  return (
    <View style={styles.bar}>
      <TextInput
        style={styles.input}
        value={query}
        onChangeText={onChangeQueryText}
        onSubmitEditing={onPressSearchHandler}
      />
      <MaterialIcon
        name="magnify"
        size={32}
        style={styles.button}
        onPress={onPressSearchHandler}
      />
    </View>
  );
};
