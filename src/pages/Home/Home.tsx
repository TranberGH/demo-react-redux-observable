import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Search, ResultList } from '../../components';
import { searchCities } from '../../store/actions';

import './Home.scss';

function useCities() {
  const dispatch = useDispatch();
  const cities = useSelector((state: any) => state.search.result);

  const search = useCallback((q: string) => {
    dispatch(searchCities(q));
  }, []);
}

interface HomeProps {
  search: Function;
  cities: any[];
}

/**
 * Home page
 * @param props {Object}
 */
function Home(props: HomeProps) {
  return (
    <>
      <p className="top-block">
        <Link to="/regions">Rechercher par région et département</Link>
      </p>
      <div>
        <Search search={props.search} />
        <ResultList
          items={props.cities}
          listClasses={['cities-list']}
          itemClasses={['city-item']}
          link={true}
        />
      </div>
    </>
  );
}

export default Home;
