import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';
import tw from 'twrnc';

interface Props {}

export const App: React.FC<Props> = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={tw`bg-gray-100 h-full`}>{children}</View>
    </SafeAreaView>
  );
};
