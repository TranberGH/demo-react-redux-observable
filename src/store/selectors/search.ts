function getSearchText(state: any): string {
  return state.search.search || '';
}

function getSearchResult(state: any): any[] {
  return state.search.result || [];
}

export { getSearchResult, getSearchText };
