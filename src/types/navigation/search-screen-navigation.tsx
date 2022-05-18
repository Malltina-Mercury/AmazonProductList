import {RootStackParamsList} from '../RootStackParams';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/core/src/types';

export type SearchScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  'Search'
>;

export type SearchScreenRouteProp = RouteProp<RootStackParamsList, 'Search'>;
