import {DependencyList, useEffect, useState} from 'react';
import request from '../helpers/api';
import waitForMilliseconds from '../helpers/waitForMilliseconds';
import {WaitToCrawlResponse} from '../types/api/waitToCrawl';
import {AxiosResponse} from 'axios';
import {ApiResponse} from '../types/hook/api';

export const useGetRequest = <ResponseT, ParamsT = any>(
  url: string,
  params?: ParamsT,
  deps: DependencyList = [],
): ApiResponse<ResponseT> => {
  const [data, setData] = useState<ResponseT>();
  const [error, setError] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoaded(false);
      setError(undefined);
      try {
        let response: AxiosResponse<ResponseT | WaitToCrawlResponse>;
        do {
          response = await request.get<ResponseT | WaitToCrawlResponse>(url, {
            params: params,
          });
          if (response.status === 202 && 'each' in response.data) {
            await waitForMilliseconds(response?.data?.each || 1000);
          } else {
            break;
          }
        } while (true);
        setData(response?.data as ResponseT);
        setIsLoaded(true);
      } catch (e: any) {
        setError(e);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [data, isLoaded, error];
};
