import { fromFetch } from 'rxjs/fetch';
import { Api } from '../../core';

function getAllRegions() {
  Api.getAllRegions()
  .then(response => response.json())
  .then(result => {
    // this.setState({ regions: result})
  })
}

export {
  getAllRegions,
}
