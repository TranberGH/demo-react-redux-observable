import {
  getDepartementsByRegion,
  hasDepartementsForRegion
} from './departements';
import { getCitiesByDepartement, hasCitiesForDepartement } from './cities';
import { getSearchText } from './search';

export {
  // Departements
  getDepartementsByRegion,
  hasDepartementsForRegion,
  // Cités
  getCitiesByDepartement,
  hasCitiesForDepartement,
  // Search
  getSearchText
};
