import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';
import tw from 'twrnc';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchView} from '../views/SearchView';

const Stack = createNativeStackNavigator();

interface Props {}

export const App: React.FC<Props> = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={tw`bg-gray-100 h-full`}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={'search'} component={SearchView} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
};
