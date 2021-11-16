import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import MobX from "./Mobx";
import ReactJS from "./ReactJS";
import Redux from "./Redux";
import TypeScript from "./TypeScript";

const Content = () => {
  return (
    <main>
      <Switch>
        <Route component={MobX} path="/mobx" />
        <Route component={ReactJS} path="/react" />
        <Route component={Redux} path="/redux" />
        <Route component={TypeScript} path="/typescript/:message" />
        <Redirect from="*" to="/" />
      </Switch>
    </main>
  );
};

export default Content;
