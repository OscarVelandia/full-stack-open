import React, { useState, useEffect } from "react";
import axios from "axios";

import AddUserForm from "./components/AddUserForm";
import FilterForm from "./components/FilterForm";
import UserList from "./components/UsersList";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [personsToShow, setPersonsToShow] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then(personsInfo => {
      setPersonsToShow(personsInfo.data);
      setPersons(personsInfo.data);
    });
  }, []);

  const addContact = event => {
    event.preventDefault();

    const nameExist = persons.some(person => person.name === newName);

    if (!nameExist) {
      const person = {
        name: newName,
        number: newPhoneNumber,
        id: persons.length + 1
      };

      setPersons(persons.concat(person));
      setPersonsToShow(persons.concat(person));
      setNewName("");
      setNewPhoneNumber("");
      return;
    }

    window.alert(`${newName} is already added to phonebook.`);
  };

  const filterByName = name => {
    if (!name.length) {
      setPersonsToShow(persons);
      return;
    }

    setPersonsToShow(
      personsToShow.filter(person => person.name.includes(name))
    );
  };

  const handleFilterChange = event => {
    filterByName(event.target.value);
  };

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handlePhoneNumberChange = event => {
    setNewPhoneNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm onChange={handleFilterChange} />
      <AddUserForm
        value={{ newName, newPhoneNumber }}
        onChange={{ handleNameChange, handlePhoneNumberChange }}
        onSubmit={addContact}
      />
      <h2>Numbers</h2>
      <UserList users={personsToShow} />
    </div>
  );
};

export default App;
