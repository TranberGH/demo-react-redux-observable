import React from 'react';

import './Search.scss';

interface SearchProps {
  search: Function;
}

class Search extends React.Component<SearchProps, any> {
  constructor(props: SearchProps) {
    super(props);

    this.search = this.search.bind(this);
  }

  search(evt: React.SyntheticEvent) {
    const search = encodeURIComponent((evt.target as HTMLInputElement).value);
    this.props.search(search);
  }

  render() {
    return (
      <div className="search-block">
        <h2 className="search-title">Rechercher par adresse</h2>
        <p><input className="search-field" type="text" placeholder="Veuillez saisir une adresse" onChange={this.search} /></p>
      </div>
    )
  }
}

export default Search;
