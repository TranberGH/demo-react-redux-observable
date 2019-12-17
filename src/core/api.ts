import { createRequestParameters, createPath } from './query';

const searchApiUrl = 'https://api-adresse.data.gouv.fr/search/';
const zonesApi = 'https://geo.api.gouv.fr/';

async function search(q: string) {
  const searchParams = [
    ['q', encodeURIComponent(q)],
    ['limit', '20'],
  ];
  return fetch(`${searchApiUrl}${createRequestParameters(searchParams)}`);
}

/**
 * Search cities from adress
 * @param q {string} - Adress
 */
function searchUrl(q: string) {
  const searchParams = [
    ['q', encodeURIComponent(q)],
    ['limit', '20'],
  ];
  return `${searchApiUrl}${createRequestParameters(searchParams)}`;
}

/**
 * Get all regions for France
 */
function getAllRegionsUrl() {
  return `${zonesApi}${createPath(['regions'])}`;
}

/**
 * Get departements in one region
 * @param regionCode {string} - Code of a region
 */
function getDepartementsByRegionUrl(regionCode: string) {
  return `${zonesApi}${createPath(['regions', regionCode, 'departements'])}`;
}

/**
 * Get cities in one departement
 * @param departementCode {string} - Departement code
 */
function getCitiesByDepartementUrl(departementCode: string) {
  return `${zonesApi}${createPath(['departements', departementCode, 'communes'])}`;
}

export {
  search,

// Urls
  getAllRegionsUrl,
  searchUrl,
  getDepartementsByRegionUrl,
  getCitiesByDepartementUrl,
}
