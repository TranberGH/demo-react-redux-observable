import React from 'react';

import { useSearch } from './hooks';

import './Search.scss';

interface SearchProps {
  search: Function;
}

function Search(props: SearchProps) {
  const { search } = props;
  const { searchAddress } = useSearch(search);

  return (
    <div className="search-block">
      <h2 className="search-title">Rechercher par adresse</h2>
      <p>
        <input
          className="search-field"
          type="text"
          placeholder="Veuillez saisir une adresse"
          onChange={searchAddress}
        />
      </p>
    </div>
  );
}

export default Search;
