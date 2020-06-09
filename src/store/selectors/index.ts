import {
  getDepartementsByRegion,
  hasDepartementsForRegion
} from './departements';
import { getCitiesByDepartement, hasCitiesForDepartement } from './cities';
import { getSearchResult, getSearchText } from './search';

export {
  // Departements
  getDepartementsByRegion,
  hasDepartementsForRegion,
  // Cités
  getCitiesByDepartement,
  hasCitiesForDepartement,
  // Search
  getSearchText,
  getSearchResult
};
