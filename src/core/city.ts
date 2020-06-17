const CITY_CONTEXT_SEPARATOR = /\s*,\s*/;

/**
 * Get city data from route state
 * @param state {Object}
 */
function getCityFromState(state: any) {
  if (state) {
    const { city, postcode, context } = state;
    let departement = null;
    let region = null;

    if (context) {
      const cityContext = parseCityContext(context);
      departement = cityContext.departement;
      region = cityContext.region;
    } else {
      const { departement: cityDept, region: cityRegion } = state;
      departement = cityDept;
      region = cityRegion;
    }

    return {
      city,
      postcode,
      departement,
      region
    };
  }

  return {
    city: '',
    postcode: '',
    departement: '',
    region: ''
  };
}

/**
 * Extract departement and region from context
 * @param context {string}
 */
function parseCityContext(context: string) {
  const contextParts = context.split(CITY_CONTEXT_SEPARATOR);

  const parts = {
    departement: '',
    region: ''
  };

  if (contextParts.length >= 2) {
    parts.departement = contextParts[1];
  }
  if (contextParts.length >= 3) {
    parts.region = contextParts[2];
  }

  return parts;
}

export { getCityFromState };
