import { PureComponent } from "react";

import { AppContext } from "./AppContext";

class Button extends PureComponent {
  static contextType = AppContext;

  render() {
    //*Starszy i gorszy zapis
    // return (
    //   <AppContext.Consumer>
    //   {
    //     ({toggleLoggedState}) => (
    //     <button onClick={toggleLoggedState} >
    //     Przełącz stan użytkownika
    //   </button>
    //     )
    //   }
    //  </AppContext.Consumer>
    // );

    return (
      <button onClick={this.context.toggleLoggedState}>
        Przełącz stan użytkownika
      </button>
    );
  }
}

export default Button;
