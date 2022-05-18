import React from 'react';
import {Button, Text, View} from 'react-native';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import {MainScreenStackNavigationProp} from '../types/MainScreenStackNavigationProp';

interface Props {}

export const MainScreen: React.FC<Props> = () => {
  const navigation = useNavigation<MainScreenStackNavigationProp>();
  return (
    <View style={tw`items-center justify-center flex-1`}>
      <Text>Homepage</Text>
      <Button
        title={'Search'}
        onPress={() => {
          navigation.navigate('Search');
        }}
      />
    </View>
  );
};
