interface Region {
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

  // Actions
  FSAction,
}
