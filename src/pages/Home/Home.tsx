import React from 'react';
import { Link } from 'react-router-dom';

import { Search, ResultList } from '../../components';
import { useCities } from './hooks';

import './Home.scss';

interface HomeProps {}

/**
 * Home page
 * @param props {Object}
 */
function Home(props: HomeProps) {
  const { cities, search } = useCities();

  return (
    <>
      <p className="top-block">
        <Link to="/regions">Rechercher par région et département</Link>
      </p>
      <div>
        <Search search={search} />
        <ResultList
          items={cities}
          listClasses={['cities-list']}
          itemClasses={['city-item']}
          link={true}
        />
      </div>
    </>
  );
}

export default Home;
