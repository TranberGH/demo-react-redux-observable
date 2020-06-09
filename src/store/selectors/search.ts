function getSearchText(state: any): string {
  return state.search.search || '';
}

export { getSearchText };
