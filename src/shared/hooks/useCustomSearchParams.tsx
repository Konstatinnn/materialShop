import type { URLSearchParamsInit } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

type SearchParamsRecord = Record<string, string | null>;

export const useCustomSearchParams = (
  params?: URLSearchParamsInit,
): SearchParamsRecord => {
  const [searchParams] = useSearchParams(params);
  const paramsObject: SearchParamsRecord = {};
  searchParams.forEach((value, key) => {
    paramsObject[key] = value;
  });

  return paramsObject;
};
