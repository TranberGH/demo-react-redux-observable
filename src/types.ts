interface Region {
  nom: string;
  code: string;
}

interface Departement {
  nom: string;
  code: string;
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

  // Actions
  FSAction,
}
