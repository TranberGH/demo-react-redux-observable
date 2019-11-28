import * as React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  Region,
  Departement,
} from '../../types';
import { OPTION_NONE } from '../../core';
import {
  fetchDepartements,
} from '../../store/actions';

import './Regions.scss';

interface RegionsProps {
  regions: Region[];
  departements: Departement[];
  cities: any[];
  // getDepartements: (regionCode: string) => void;
  getCities: (departementCode: string) => void;
}

function Regions(props: RegionsProps) {
  const dispatch = useDispatch();

  function getDepartements(evt: React.SyntheticEvent) {
    const select = evt.target as HTMLSelectElement;
    dispatch(fetchDepartements(select.options[select.selectedIndex].value));
  }

  function getCities(evt: React.SyntheticEvent) {
    const select = evt.target as HTMLSelectElement;
    props.getCities(select.options[select.selectedIndex].value)
  }

  console.log('regions props : ', props)
  return (
    <>
    <p className="top-block"><Link to="/">Accueil</Link></p>
    <h2 className="search-title">Rechercher par régions et départements</h2>
    <p className="choice-block"><select onChange={getDepartements}>
      <option key={`region-${OPTION_NONE}`} value={OPTION_NONE}>Choisissez une région</option>
      { props.regions.map(region => <option key={`region-${region.code}`} value={region.code}>{region.nom}</option>)}
    </select></p>
    { props.departements.length > 0 && <p className="choice-block"><select onChange={getCities}>
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
