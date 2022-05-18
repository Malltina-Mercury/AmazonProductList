import React, {useCallback, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './SearchBar.styles';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationProp} from '../../types/navigation/main-screen-navigation';

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
      />
      <Text style={styles.button} onPress={onPressSearchHandler}>
        Search
      </Text>
    </View>
  );
};
