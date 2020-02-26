import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getCityFromState } from '../../core';

import './City.scss';

function City() {
  const { state } = useLocation(); // hook useLocation -> see react-router
  const { city, postcode, departement, region } = getCityFromState(state);
  return (
    <>
      <p className="top-block">
        <Link to="/">Accueil</Link>
      </p>
      {state && (
        <div className="city-detail">
          <header className="city-header">
            <h1>{city}</h1>
          </header>

          <dl className="city-props">
            <dt>Code postal</dt>
            <dd>{postcode}</dd>
            <dt>Département</dt>
            <dd>{departement}</dd>
            <dt>Région</dt>
            <dd>{region}</dd>
          </dl>
        </div>
      )}
      {!state && <p>Pas de commune existante</p>}
    </>
  );
}

export default City;
