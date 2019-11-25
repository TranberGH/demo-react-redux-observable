import { createRequestParameters, createPath } from './query';

const searchApiUrl = 'https://api-adresse.data.gouv.fr/search/';
const zonesApi = 'https://geo.api.gouv.fr/';

/**
 * Search cities from adress
 * @param q {string} - Adress
 */
async function search(q: string) {
  const searchParams = [
    ['q', encodeURIComponent(q)],
    ['limit', '20'],
  ];
  return fetch(`${searchApiUrl}${createRequestParameters(searchParams)}`);
}

/**
 * Get all regions for France
 */
async function getAllRegions() {
  return fetch(`${zonesApi}${createPath(['regions'])}`);
}

/**
 * Get departements in one region
 * @param regionCode {string} - Code of a region
 */
async function getDepartementsByRegion(regionCode: string) {
  return fetch(`${zonesApi}${createPath(['regions', regionCode, 'departements'])}`);
}

/**
 * Get cities in one departement
 * @param departementCode {string} - Departement code
 */
async function getCitiesByDepartement(departementCode: string) {
  return fetch(`${zonesApi}${createPath(['departements', departementCode, 'communes'])}`);
}

export {
  search,
  getAllRegions,
  getDepartementsByRegion,
  getCitiesByDepartement,
}
