import {
  fetchRegions,
  fetchRegionsSuccess,
  fetchRegionsError,
} from './regions';

import {
  fetchDepartements,
  fetchDepartementsSuccess,
  fetchDepartementsError,
} from './departements'

import {
  fetchCities,
  fetchCitiesSuccess,
  fetchCitiesError,
} from './cities'

export * from './constants';

export {
  // Regions
  fetchRegions,
  fetchRegionsSuccess,
  fetchRegionsError,

  // Departements
  fetchDepartements,
  fetchDepartementsSuccess,
  fetchDepartementsError,

  // Cités
  fetchCities,
  fetchCitiesSuccess,
  fetchCitiesError,
}
