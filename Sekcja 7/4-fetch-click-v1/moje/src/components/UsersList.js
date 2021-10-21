import React from "react";
const UsersList = (props) => {
  console.log(props.users);
  const users = props.users.map((user) => (
    <li key={user.login.uuid}>
      <p>
        <strong>{`${user.name.title}  ${user.name.last}`}</strong>
      </p>
      <p>{user.email}</p>
    </li>
  ));
  return <ul>{users}</ul>;
};

export default UsersList;
