import {useGetRequest} from './useGetRequest';
import {SearchApiParams, SearchApiResponse} from '../types/api/searchApi';
import {DependencyList} from 'react';
import {ApiResponse} from '../types/hook/api';

export const useSearchApi = (
  params: SearchApiParams,
  deps: DependencyList,
): ApiResponse<SearchApiResponse> => {
  const [data, isLoaded, error] = useGetRequest<
    SearchApiResponse,
    SearchApiParams
  >('/search/v2', params, deps);

  return [data, isLoaded, error];
};
