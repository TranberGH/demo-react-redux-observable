import { useCallback } from 'react';

function usePagination(updateFn: any) {
  const updateCurrentPage = useCallback((evt: React.SyntheticEvent) => {
    const currentPage = (evt.target as HTMLElement).dataset.page || '';
    const page = Number.parseInt(currentPage);
    if (!isNaN(page)) {
      updateFn(page);
    }
  }, []);

  return { updateCurrentPage };
}

export { usePagination };
