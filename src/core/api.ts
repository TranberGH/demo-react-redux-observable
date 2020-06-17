import { createRequestParameters, createPath } from './query';

const searchApiUrl = process.env.SEARCH_API_URL;
const zonesApiUrl = process.env.ZONE_API_URL;

async function search(q: string) {
  const searchParams = [
    ['q', encodeURIComponent(q)],
    ['limit', '20']
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
    ['limit', '20']
  ];
  return `${searchApiUrl}${createRequestParameters(searchParams)}`;
}

/**
 * Get all regions for France
 */
function getAllRegionsUrl() {
  return `${zonesApiUrl}${createPath(['regions'])}`;
}

/**
 * Get departements in one region
 * @param regionCode {string} - Code of a region
 */
function getDepartementsByRegionUrl(regionCode: string) {
  return `${zonesApiUrl}${createPath(['regions', regionCode, 'departements'])}`;
}

/**
 * Get cities in one departement
 * @param departementCode {string} - Departement code
 */
function getCitiesByDepartementUrl(departementCode: string) {
  return `${zonesApiUrl}${createPath([
    'departements',
    departementCode,
    'communes'
  ])}`;
}

/**
 * Get city by code
 * @param cityCode {string} - city code
 */
function getCityUrl(cityCode: string) {
  return `${zonesApiUrl}${createPath(['communes', cityCode])}`;
}

export {
  search,
  // Urls
  getAllRegionsUrl,
  searchUrl,
  getDepartementsByRegionUrl,
  getCitiesByDepartementUrl,
  getCityUrl
};
