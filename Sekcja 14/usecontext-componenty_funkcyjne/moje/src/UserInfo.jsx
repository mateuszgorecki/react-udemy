import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const UserInfo = () => {
  const { isUserLogged } = useContext(AppContext);
  const loggedInfo = isUserLogged ? "Zalogowany" : "Nie zalogowany";

  return (
    <div>
      <p>Użytkownik jest {loggedInfo}</p>
    </div>
  );
};

export default UserInfo;
