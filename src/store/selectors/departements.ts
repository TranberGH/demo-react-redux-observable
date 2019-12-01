import {
  Departement,
} from '../../types';

function getDepartementsByRegion(state: any): Departement[] {
  return state.departements.departements[state.departements.region] || []
}

function hasDepartementsForRegion(region: string, state: any): boolean {
  return Reflect.has(state.departements.departements, region)
}

export {
  getDepartementsByRegion,
  hasDepartementsForRegion,
}
