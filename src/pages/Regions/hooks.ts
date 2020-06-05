import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Region, Departement, City } from '../../types';
import {
  getDepartementsByRegion,
  getCitiesByDepartement
} from '../../store/selectors';
import {
  fetchDepartements,
  fetchRegions,
  fetchCities
} from '../../store/actions';

function usePlaces() {
  const regions: Region[] = useSelector((state: any) => state.regions.regions);
  const departements: Departement[] = useSelector(getDepartementsByRegion);
  const cities: City[] = useSelector(getCitiesByDepartement);

  const dispatch = useDispatch();
  const fetchDepartementsHandler = useCallback((evt: React.SyntheticEvent) => {
    const select = evt.target as HTMLSelectElement;
    dispatch(fetchDepartements(select.options[select.selectedIndex].value));
  }, []);

  const fetchCitiesHandler = useCallback((evt: React.SyntheticEvent) => {
    const select = evt.target as HTMLSelectElement;
    dispatch(fetchCities(select.options[select.selectedIndex].value));
  }, []);

  useEffect(() => {
    if (regions.length === 0) {
      dispatch(fetchRegions());
    }
  }, [regions]);

  return {
    fetchDepartementsHandler,
    fetchCitiesHandler,
    regions,
    departements,
    cities
  };
}

export { usePlaces };
