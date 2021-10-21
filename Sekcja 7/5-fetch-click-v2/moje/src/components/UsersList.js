import React from "react";
import "../styles/UsersList.css";

const UsersList = (props) => {
  console.log(props.users);
  const users = props.users.map((user) => (
    <li key={user.login.uuid}>
      <img src={user.picture.large} alt={user.name.last} />
      <p>
        <strong>{`${user.name.title}  ${user.name.last}`}</strong>
      </p>
      <p>{user.email}</p>
    </li>
  ));
  return <ul>{users}</ul>;
};

export default UsersList;
