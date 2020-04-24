function getPageCount(totalItemCount: number, rowsPerPage: number) {
  return Math.ceil(totalItemCount / rowsPerPage);
}

function createError(error: Error | string): Error {
  if (typeof error === 'string') {
    return new Error(error);
  }
  return error;
}

export { createError, getPageCount };
