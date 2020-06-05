import React from 'react';
import { Link } from 'react-router-dom';

import { OPTION_NONE } from '../../core';
import { usePlaces } from './hooks';
import { ResultList } from '../../components';

import './Regions.scss';

interface RegionsProps {}

function Regions(props: RegionsProps) {
  const {
    fetchDepartementsHandler,
    fetchCitiesHandler,
    regions,
    departements,
    cities
  } = usePlaces();

  return (
    <>
      <p className="top-block">
        <Link to="/">Accueil</Link>
      </p>

      <h2 className="search-title">Rechercher par régions et départements</h2>

      <p className="choice-block">
        <select onChange={fetchDepartementsHandler}>
          <option key={`region-${OPTION_NONE}`} value={OPTION_NONE}>
            Choisissez une région
          </option>
          {regions.map(region => (
            <option key={`region-${region.code}`} value={region.code}>
              {region.nom}
            </option>
          ))}
        </select>
      </p>

      {departements.length > 0 && (
        <p className="choice-block">
          <select onChange={fetchCitiesHandler}>
            <option key={`departement-${OPTION_NONE}`} value={OPTION_NONE}>
              Choisissez un département
            </option>
            {departements.map(departement => (
              <option
                key={`departement-${departement.code}`}
                value={departement.code}
              >
                {departement.nom}
              </option>
            ))}
          </select>
        </p>
      )}
      {/* Utiliser composant ResultList ??? */}
      {cities.length > 0 && (
        <ul className="cities-list">
          {cities.map(city => (
            <li key={`city-${city.code}`} className="city-item">
              {city.nom}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Regions;
