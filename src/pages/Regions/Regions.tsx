import * as React from 'react';
import { Link } from 'react-router-dom';

import {
  Region,
  Departement,
} from '../../types';
import { OPTION_NONE } from '../../core';

import './Regions.scss';

interface RegionsProps {
  regions: Region[];
  departements: Departement[];
  cities: any[];
  fetchDepartements: (regionCode: string) => void;
  fetchCities: (departementCode: string) => void;
}

function Regions(props: RegionsProps) {

  function fetchDepartements(evt: React.SyntheticEvent) {
    const select = evt.target as HTMLSelectElement;
    props.fetchDepartements(select.options[select.selectedIndex].value);
  }

  function fetchCities(evt: React.SyntheticEvent) {
    const select = evt.target as HTMLSelectElement;
    props.fetchCities(select.options[select.selectedIndex].value)
  }

  console.log('regions props : ', props)
  return (
    <>
    <p className="top-block"><Link to="/">Accueil</Link></p>

    <h2 className="search-title">Rechercher par régions et départements</h2>

    <p className="choice-block"><select onChange={fetchDepartements}>
      <option key={`region-${OPTION_NONE}`} value={OPTION_NONE}>Choisissez une région</option>
      { props.regions.map(region => <option key={`region-${region.code}`} value={region.code}>{region.nom}</option>)}
    </select></p>

    { props.departements.length > 0 && <p className="choice-block"><select onChange={fetchCities}>
    <option key={`departement-${OPTION_NONE}`} value={OPTION_NONE}>Choisissez un département</option>
      { props.departements.map(departement => <option key={`departement-${departement.code}`} value={departement.code}>{departement.nom}</option>)}
    </select></p> }

    { props.cities.length > 0 && <ul className="cities-list">
      { props.cities.map( city => (
        <li key={`city-${city.code}`} className="city-item">
          { city.nom }
        </li>
      ))}
    </ul> }
    </>
  )
}

export default Regions;
