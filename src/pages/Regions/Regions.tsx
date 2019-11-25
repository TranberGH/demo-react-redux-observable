import * as React from 'react';
import { Link } from 'react-router-dom';

import { OPTION_NONE } from '../../core';
import { Region } from '../../types';

import './Regions.scss';

interface RegionsProps {
  regions: Region[];
  departements: any[];
  cities: any[];
  getDepartements: (regionCode: string) => void;
  getCities: (departementCode: string) => void;
}

class Regions extends React.Component<RegionsProps, any> {
  constructor(props: RegionsProps) {
    super(props);

    this.getDepartements = this.getDepartements.bind(this);
    this.getCities = this.getCities.bind(this);
  }

  getDepartements(evt: React.SyntheticEvent) {
    const select = evt.target as HTMLSelectElement;
    this.props.getDepartements(select.options[select.selectedIndex].value)
  }

  getCities(evt: React.SyntheticEvent) {
    const select = evt.target as HTMLSelectElement;
    this.props.getCities(select.options[select.selectedIndex].value)
  }

  render() {
    return (
      <>
      <p className="top-block"><Link to="/">Accueil</Link></p>
      <h2 className="search-title">Rechercher par régions et départements</h2>
      <p className="choice-block"><select onChange={this.getDepartements}>
        <option key={`region-${OPTION_NONE}`} value={OPTION_NONE}>Choisissez une région</option>
        { this.props.regions.map(region => <option key={`region-${region.code}`} value={region.code}>{region.nom}</option>)}
      </select></p>
      { this.props.departements.length > 0 && <p className="choice-block"><select onChange={this.getCities}>
      <option key={`departement-${OPTION_NONE}`} value={OPTION_NONE}>Choisissez un département</option>
        { this.props.departements.map(departement => <option key={`departement-${departement.code}`} value={departement.code}>{departement.nom}</option>)}
      </select></p> }
      { this.props.cities.length > 0 && <ul className="cities-list">
        { this.props.cities.map( city => (
          <li key={`city-${city.code}`} className="city-item">
            { city.nom }
          </li>
        ))}
      </ul> }
      </>
    )
  }
}

export default Regions;
