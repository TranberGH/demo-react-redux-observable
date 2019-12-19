import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Home } from '../pages';
import { searchCities } from '../store/actions';

/**
 * Manage data for Home page
 */
function HomeContainer(props: any) {
  const dispatch = useDispatch();
  const cities = useSelector((state: any) => state.search.result);

  function search(q: string) {
    dispatch(searchCities(q))
  }

  return (
    <Home search={search} cities={cities}/>
  )
}

export default HomeContainer;
