import {RootStackParamsList} from '../RootStackParams';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/core/src/types';

export type MainScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  'Main'
>;

export type MainScreenRouteProp = RouteProp<RootStackParamsList, 'Main'>;
