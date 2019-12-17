import * as React from 'react';

import { Api } from '../core';
import { Home } from '../pages';

/**
 * Manage data for Home page
 */
class HomeContainer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      cities: []
    }

    this.searchCities = this.searchCities.bind(this);
  }
// A modifier -> store
  searchCities(q: string) {
    if (q) {
      Api.search(q)
      .then(response => response.json())
      .then(result => {
        const cities = result.features.map((feature: any) => {
          return feature.properties;
        });

        this.setState({ cities });
      });
    } else {
      this.setState({ cities: [] });
    }
  }

  render() {
    return (
      <Home search={this.searchCities} cities={this.state.cities}/>
    )
  }
}

export default HomeContainer;
