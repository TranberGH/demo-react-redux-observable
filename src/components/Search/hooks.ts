import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getSearchText } from '../../store/selectors';

function useSearch(searchFn: Function) {
  const searchText = useSelector(getSearchText);
  const searchAddress = useCallback((evt: React.SyntheticEvent) => {
    const searchValue = encodeURIComponent(
      (evt.target as HTMLInputElement).value
    );
    searchFn(searchValue);
  }, []);

  return { searchText, searchAddress };
}

export { useSearch };
