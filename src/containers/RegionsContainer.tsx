import { connect } from 'react-redux';

import { Regions } from '../pages';
import {
  fetchRegions,
  fetchDepartements,
  fetchCities,
} from '../store/actions';
import {
  getDepartementsByRegion,
  getCitiesByDepartement,
} from '../store/selectors';

/**
 * Manage data for Regions page
 */

const mapStateToProps = (state: any) => ({
  regions: state.regions.regions,
  departements: getDepartementsByRegion(state),
  cities: getCitiesByDepartement(state),
})

const mapDispatchToProps = (dispatch: any) => ({
  fetchRegions: () => dispatch(fetchRegions()),
  fetchDepartements: (regionCode: string) => dispatch(fetchDepartements(regionCode)),
  fetchCities: (departementCode: string) => dispatch(fetchCities(departementCode)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Regions)
