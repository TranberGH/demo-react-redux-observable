import { City } from '../../types';

function getCitiesByDepartement(state: any): City[] {
  return state.cities.cities[state.cities.departement] || [];
}

function hasCitiesForDepartement(departement: string, state: any): boolean {
  return Reflect.has(state.cities.cities, departement);
}

export { getCitiesByDepartement, hasCitiesForDepartement };
