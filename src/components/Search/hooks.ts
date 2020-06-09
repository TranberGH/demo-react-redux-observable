import { useCallback } from 'react';

function useSearch(searchFn: Function) {
  const searchAddress = useCallback((evt: React.SyntheticEvent) => {
    const searchValue = encodeURIComponent(
      (evt.target as HTMLInputElement).value
    );
    searchFn(searchValue);
  }, []);

  return { searchAddress };
}

export { useSearch };
