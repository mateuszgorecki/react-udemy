import { createContext } from 'react';

export const defaultObject = {
  isUserLogged: true,
  toggleLoggedState: () => console.log('Domyślny Provider'),
}

export const AppContext = createContext(defaultObject);