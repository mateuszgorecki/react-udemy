import { createContext } from 'react';

export const defaultObject = {
  isUserLogged: false,
  toggleLoggedState: () => console.log('Domyślny Provider'),
}

export const AppContext = createContext(defaultObject);