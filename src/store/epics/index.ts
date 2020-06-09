import { getAllRegionsEpic } from './regions';
import { getDepartementsByRegionEpic } from './departements';
import { getCitiesByDepartementEpic, resetDepartementEpic } from './cities';
import { getCitiesEpic } from './search';

export {
  getAllRegionsEpic,
  getDepartementsByRegionEpic,
  getCitiesByDepartementEpic,
  resetDepartementEpic,
  getCitiesEpic
};
