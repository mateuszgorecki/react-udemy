import React from "react";
import { Route, Redirect } from "react-router-dom";

const permission = true;

const AdminPage = () => {
  return (
    <>
      <div>
        <Route
          render={() =>
            permission ? <h3>Panel Admina - elo</h3> : <Redirect to="/login" />
          }
        />
      </div>
    </>
  );
};

export default AdminPage;
