import React from 'react';
import {StatusBar, useColorScheme, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import tw from 'twrnc';

import {MainScreen} from '../screens/MainScreen';
import {SearchView} from '../screens/SearchView';

const Stack = createNativeStackNavigator();

interface Props {}

export const App: React.FC<Props> = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={tw`bg-gray-100 h-full`}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name={'Home'} component={MainScreen} />
            <Stack.Screen name={'Search'} component={SearchView} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
};
