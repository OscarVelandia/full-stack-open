import React from "react";
import "./UsersList.css";

const UsersList = ({ users, onClick }) =>
  users.map(person => (
    <div className="wrapper" key={person.id}>
      <div>
        {person.name} - {person.number}
      </div>
      <button onClick={() => onClick(person.id, person.name)}>
        Delete contact
      </button>
    </div>
  ));

export default UsersList;
