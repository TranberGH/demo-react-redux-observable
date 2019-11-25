import * as React from 'react';
import { Link } from 'react-router-dom';

import {
  Search,
  CitiesList,
} from '../../components';


import './Home.scss';

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
    <p className="top-block"><Link to="/regions">Rechercher par région et département</Link></p>
    <div>
      <Search search={props.search}/>
      <CitiesList cities={props.cities}/>
    </div>
    </>
  )
}

export default Home;
