import * as React from 'react';
import { Link } from 'react-router-dom';

interface CitiesListProps {
  cities: any[];
}

/**
 * Display list of cities
 * @param props {Object}
 */
function CitiesList(props: CitiesListProps) {
  return (
    <>
    { props.cities && <ul className="cities-list">
      { props.cities.map(city => {
        return (
          <li key={`city-${city.id}`} className="city-item">
            <Link to={{
              pathname: `/city/${city.id}`,
              state: { city }
            }}>{ city['city'] }</Link>
          </li>
        )
      }) }
    </ul> }
    </>
  )
}

export default CitiesList;
