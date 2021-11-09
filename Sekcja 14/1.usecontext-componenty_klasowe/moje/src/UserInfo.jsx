import { PureComponent } from "react";
import { AppContext } from "./AppContext";
class UserInfo extends PureComponent {
  static contextType = AppContext;

  render() {
    const { isUserLogged } = this.context;
    const loggedInfo = isUserLogged ? "Zalogowany" : "Nie zalogowany";
    return (
      <div>
        <p>Użytkownik jest {loggedInfo}</p>
      </div>
    );

    // return (
    //   <AppContext.Consumer>
    //   {
    //     ({isUserLogged})=>(
    //       <div>
    //      {console.log(isUserLogged) }
    //         <p>Użytkownik jest {isUserLogged ? 'zalogowany' : 'niezalogowany'}</p>
    //       </div>
    //     )
    //   }
    //   </AppContext.Consumer>
    // );
  }
}

export default UserInfo;
