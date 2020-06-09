import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchCities } from '../../store/actions';
import { getSearchResult } from '../../store/selectors';

function useCities() {
  const dispatch = useDispatch();
  const cities = useSelector(getSearchResult);

  const search = useCallback((q: string) => {
    dispatch(searchCities(q));
  }, []);

  return { cities, search };
}

export { useCities };
