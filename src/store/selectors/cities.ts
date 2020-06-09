import { City } from '../../types';

function getCitiesByDepartement(state: any): City[] {
  return state.cities.cities[state.cities.departement] || [];
}

function hasCitiesForDepartement(departement: string, state: any): boolean {
  return Reflect.has(state.cities.cities, departement);
}

function getCityDepartement(state: any): any {
  return state.cities.departement || null;
}

export { getCitiesByDepartement, hasCitiesForDepartement, getCityDepartement };
