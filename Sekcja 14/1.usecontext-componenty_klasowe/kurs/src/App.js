import { PureComponent } from 'react';

import Button from './Button';
import UserInfo from './UserInfo';

import { AppContext, defaultObject } from './AppContext';

class App extends PureComponent {
  state = {
    isUserLogged: defaultObject.isUserLogged,
    isUserAdult: true,
  }

  render() {
    return (
      <div>
        <UserInfo />
        <Button />
        <AppContext.Provider value={{
          isUserLogged: this.state.isUserAdult,
          toggleLoggedState: this.handleToggleStateIsAdult,
        }}>
          <UserInfo />
          <Button />
        </AppContext.Provider>
      </div>
    );
  }

  handleToggleStateIsLogged = () => this.setState(prevState => ({
    isUserLogged: !prevState.isUserLogged,
  }));

  handleToggleStateIsAdult = () => this.setState(prevState => ({
    isUserAdult: !prevState.isUserAdult,
  }));
}

export default App;