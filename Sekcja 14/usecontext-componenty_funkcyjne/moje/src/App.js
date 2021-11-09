import React from "react";

import Button from "./Button";
import UserInfo from "./UserInfo";

import AppProvider from "./AppContext";

const App = () => (
  <div>
    <AppProvider>
      <UserInfo />
      <Button />
    </AppProvider>
  </div>
);

export default App;
