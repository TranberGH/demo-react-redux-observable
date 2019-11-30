import { connect } from 'react-redux';

import { Regions } from '../pages';
import {
  fetchRegions,
  fetchDepartements,
} from '../store/actions';

/**
 * Manage data for Regions page
 */

// class RegionsContainer extends React.Component<any, any> {
//   constructor(props: any) {
//     super(props);

//     this.state = {
//       regions: [],
//       departements: [],
//       cities: []
//     }

//     this.getAllRegions = this.getAllRegions.bind(this);
//     this.getDepartements = this.getDepartements.bind(this);
//     this.getCities = this.getCities.bind(this);
//   }

//   getAllRegions() {
//     Api.getAllRegions()
//     .then(response => response.json())
//     .then(result => {
//       this.setState({ regions: result})
//     })
//   }

//   getDepartements(regionCode: string) {
//     if (regionCode === OPTION_NONE) {
//       this.setState({ departements: [], cities: []})
//     } else {
//       Api.getDepartementsByRegion(regionCode)
//       .then(response => response.json())
//       .then(result => {
//         this.setState({ departements: result})
//       })
//     }
//   }

//   getCities(departementCode: string) {
//     if (departementCode === OPTION_NONE) {
//       this.setState({ cities: []})
//     } else {
//       Api.getCitiesByDepartement(departementCode)
//       .then(response => response.json())
//       .then(result => {
//         this.setState({ cities: result})
//       })
//     }
//   }

//   componentDidMount() {
//     this.getAllRegions();
//   }

//   render() {
//     return (
//       <Regions
//         regions={this.state.regions}
//         departements={this.state.departements}
//         cities={this.state.cities}
//         getDepartements={this.getDepartements}
//         getCities={this.getCities}
//       />
//     )
//   }
// }

// export default RegionsContainer;

const mapStateToProps = (state: any) => ({
  regions: state.regions.regions,
  departements: state.departements.departements,
  cities: []
})

const mapDispatchToProps = (dispatch: any) => ({
  fetchRegions: dispatch(fetchRegions()),
  fetchDepartements: (regionCode: string) => dispatch(fetchDepartements(regionCode)),
  getCities: () => []
})


export default connect(mapStateToProps, mapDispatchToProps)(Regions)
