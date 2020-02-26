import React, { useCallback } from 'react';

import './Search.scss';

interface SearchProps {
  search: Function;
}

function useSearch(searchFn: Function) {
  const search = useCallback((evt: React.SyntheticEvent) => {
    const searchValue = encodeURIComponent(
      (evt.target as HTMLInputElement).value
    );
    searchFn(searchValue);
  }, []);

  return { search };
}

function Search(props: SearchProps) {
  const { search } = useSearch(props.search);

  return (
    <div className="search-block">
      <h2 className="search-title">Rechercher par adresse</h2>
      <p>
        <input
          className="search-field"
          type="text"
          placeholder="Veuillez saisir une adresse"
          onChange={search}
        />
      </p>
    </div>
  );
}

export default Search;
