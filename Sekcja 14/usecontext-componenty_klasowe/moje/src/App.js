import React, { PureComponent } from "react";

import Button from "./Button";
import UserInfo from "./UserInfo";

import { AppContext, defaultObject } from "./AppContext";

class App extends PureComponent {
  state = {
    isUserLogged: defaultObject.isUserLogged,
    isUserAdult: false,
  };

  handleToggleStateIsLogged = () =>
    this.setState((prevState) => ({ isUserLogged: !prevState.isUserLogged }));
  handleToggleStateIsAdult = () =>
    this.setState((prevState) => ({ isUserAdult: !prevState.isUserAdult }));

  render() {
    return (
      <div>
        <AppContext.Provider
          value={{
            isUserLogged: this.state.isUserLogged,
            toggleLoggedState: this.handleToggleStateIsLogged,
          }}
        >
          <UserInfo />
          <Button />
        </AppContext.Provider>
        <AppContext.Provider
          value={{
            isUserLogged: this.state.isUserAdult,
            toggleLoggedState: this.handleToggleStateIsAdult,
          }}
        >
          <UserInfo />
          <Button />
        </AppContext.Provider>
      </div>
    );
  }
}

export default App;
