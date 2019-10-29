import React from "react";

const UsersList = ({ users, onClick }) =>
  users.map((person, idx) => (
    <>
      <p key={person.id}>
        {person.name} - {person.number}
      </p>
      <button onClick={() => onClick(person.id)}>
        Delete contact {person.id + 11}
      </button>
    </>
  ));

export default UsersList;
