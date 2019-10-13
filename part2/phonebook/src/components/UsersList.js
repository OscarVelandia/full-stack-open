import React from "react";

const UsersList = ({ users }) =>
  users.map(person => (
    <p key={person.id}>
      {person.name} - {person.number}
    </p>
  ));

export default UsersList;
