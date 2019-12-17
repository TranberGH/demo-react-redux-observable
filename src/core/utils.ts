function getPageCount(totalItemCount: number, rowsPerPage: number) {
  return Math.ceil(totalItemCount / rowsPerPage);
}

export {
  getPageCount,
}
