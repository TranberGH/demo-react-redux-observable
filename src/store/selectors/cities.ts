function getCitiesByDepartement(state: any) {
  return state.cities.cities[state.cities.departement] || []
}

function hasCitiesForDepartement(state: any) {
  return Reflect.has(state.cities.cities, state.cities.departement)
}

export {
  getCitiesByDepartement,
  hasCitiesForDepartement,
}
