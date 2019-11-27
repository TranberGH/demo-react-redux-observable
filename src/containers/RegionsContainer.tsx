import * as React from 'react';
import { connect } from 'react-redux';

import { Api, OPTION_NONE } from '../core';
import { Regions } from '../pages';

/**
 * Manage data for Regions page
 */
class RegionsContainer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      regions: [],
      departements: [],
      cities: []
    }

    this.getAllRegions = this.getAllRegions.bind(this);
    this.getDepartements = this.getDepartements.bind(this);
    this.getCities = this.getCities.bind(this);
  }

  getAllRegions() {
    Api.getAllRegions()
    .then(response => response.json())
    .then(result => {
      this.setState({ regions: result})
    })
  }

  getDepartements(regionCode: string) {
    if (regionCode === OPTION_NONE) {
      this.setState({ departements: [], cities: []})
    } else {
      Api.getDepartementsByRegion(regionCode)
      .then(response => response.json())
      .then(result => {
        this.setState({ departements: result})
      })
    }
  }

  getCities(departementCode: string) {
    if (departementCode === OPTION_NONE) {
      this.setState({ cities: []})
    } else {
      Api.getCitiesByDepartement(departementCode)
      .then(response => response.json())
      .then(result => {
        this.setState({ cities: result})
      })
    }
  }

  componentDidMount() {
    this.getAllRegions();
  }

  render() {
    return (
      <Regions
        regions={this.state.regions}
        departements={this.state.departements}
        cities={this.state.cities}
        getDepartements={this.getDepartements}
        getCities={this.getCities}
      />
    )
  }
}

export default RegionsContainer;
