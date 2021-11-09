import { useState } from 'react';

import Button from './Button';
import UserInfo from './UserInfo';

import { AppContext, defaultObject } from './AppContext';

const App = () => {
  const [isUserLogged, setIsUserLogged] = useState(defaultObject.isUserLogged);
  const [isUserAdult, setIsUserAdult] = useState(true);

  const toggleLoggedState = () => setIsUserLogged(prevValue => !prevValue);
  const toggleAdultState = () => setIsUserAdult(prevValue => !prevValue);

  return (
    <div>
      <AppContext.Provider value={{ isUserLogged, toggleLoggedState }}>
      <UserInfo />
      <Button />
      </AppContext.Provider>
      <AppContext.Provider value={{ isUserLogged: isUserAdult, toggleLoggedState: toggleAdultState }}>
        <UserInfo />
        <Button />
      </AppContext.Provider>
    </div>
  );

}

export default App;