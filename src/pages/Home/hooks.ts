import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchCities } from '../../store/actions';

function useCities() {
  const dispatch = useDispatch();
  const cities = useSelector((state: any) => state.search.result);

  const search = useCallback((q: string) => {
    dispatch(searchCities(q));
  }, []);

  return { cities, search };
}

export { useCities };
