import {
  getDepartementsByRegion,
  hasDepartementsForRegion,
  getDepartementRegion
} from './departements';
import {
  getCitiesByDepartement,
  hasCitiesForDepartement,
  getCityDepartement
} from './cities';
import { getSearchResult, getSearchText } from './search';

export {
  // Departements
  getDepartementsByRegion,
  hasDepartementsForRegion,
  getDepartementRegion,
  // Cités
  getCitiesByDepartement,
  hasCitiesForDepartement,
  getCityDepartement,
  // Search
  getSearchText,
  getSearchResult
};
