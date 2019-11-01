import React, { useState, useEffect } from "react";

import {
  getAllContacts,
  createContact,
  updateContact,
  deleteContact
} from "./service/contact";

import AddUserForm from "./components/AddUserForm";
import FilterForm from "./components/FilterForm";
import UserList from "./components/UsersList";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [personsToShow, setPersonsToShow] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  useEffect(() => {
    getAllContacts().then(personsInfo => {
      setPersonsToShow(personsInfo.data);
      setPersons(personsInfo.data);
    });
  }, []);

  const addContact = event => {
    event.preventDefault();

    const nameExist = persons.some(person => person.name === newName);
    const updatePersonId = persons.reduce((acc, person) => {
      return person.name === newName ? (acc = person.id) : acc;
    }, 0);
    const nameExistConfirm =
      nameExist &&
      window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?.`
      );

    const person = {
      name: newName,
      number: newPhoneNumber,
      ...(!nameExist && { id: persons.length + 123 }),
      ...(nameExist && { id: updatePersonId })
    };

    if (!nameExist) {
      createContact(person).then(person => {
        createNewPerson(person);
      });
    }

    if (nameExist && nameExistConfirm) {
      modifyContactPhoneNumber(person);
    }
  };

  const modifyContactPhoneNumber = personData => {
    const { id } = personData;

    updateContact(id, personData).then(modifyPerson => {
      updatePersonData(modifyPerson);
    });
  };

  const updatePersonData = personData => {
    const updatedPersons = persons.map(person => {
      if (person.id === personData.id) {
        return personData;
      }

      return person;
    });

    setPersons(updatedPersons);
    setPersonsToShow(updatedPersons);
    setNewName("");
    setNewPhoneNumber("");
  };

  const createNewPerson = personData => {
    setPersons(persons.concat(personData));
    setPersonsToShow(persons.concat(personData));
    setNewName("");
    setNewPhoneNumber("");
  };

  const handleDeleteClick = selectedPersonId => {
    const personToDelete = persons.filter(
      person => person.id === selectedPersonId
    )[0];

    if (window.confirm(`Delete ${personToDelete.name}`)) {
      setPersonsToShow(
        personsToShow.filter(person => person.id !== selectedPersonId)
      );

      deleteContact(selectedPersonId, personToDelete);
    }
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

  const filterByName = name => {
    if (!name.length) {
      setPersonsToShow(persons);
      return;
    }

    setPersonsToShow(
      personsToShow.filter(person => person.name.includes(name))
    );
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
      <UserList onClick={handleDeleteClick} users={personsToShow} />
    </div>
  );
};

export default App;
