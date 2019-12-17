interface Region {
  nom: string;
  code: string;
}

interface Departement {
  nom: string;
  code: string;
}

interface City {
  nom: string;
  code: string;
  postcode: string;
}

// Compliant action with "Flux Standard Action"
interface FSAction {
  type: string;
  payload?: any;
  error?: boolean;
  meta?: any;
}

export {
  Region,
  Departement,
  City,

  // Actions
  FSAction,
}
