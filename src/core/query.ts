/**
 * Create request parameters string
 * @param params {array} - Array of arrays of 2 elements : key and value
 */
function createRequestParameters(params: Array<string[]>): string {
  const paramsSteps = params.map(param => {
    return param.join('=');
  });

  if (paramsSteps.length > 0) {
    return `?${paramsSteps.join('&')}`;
  }

  return '';
}

const PATH_SEPARATOR = '/';

/**
 * Create url path string
 * @param pathSteps {array} - Array of path steps
 * @param start {boolean} - Add a start slash to path
 */
function createPath(pathSteps: string[], start = false): string {
  let startPath = '';
  if (start) {
    startPath = PATH_SEPARATOR;
  }
  return `${startPath}${pathSteps.join(PATH_SEPARATOR)}`;
}

export { createRequestParameters, createPath };
