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
import ErrorMessage from "./components/ErrorMessage";
import SuccessMessage from "./components/SuccessMessage";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [personsToShow, setPersonsToShow] = useState([]);
  const [personAlreadyDeleted, setpersonAlreadyDeleted] = useState(undefined);
  const [lastAddedPersonName, setLastAddedPersonName] = useState(undefined);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  useEffect(() => {
    getAllContacts().then(personsInfo => {
      setPersonsToShow(personsInfo.data);
      setPersons(personsInfo.data);
    });
  }, [personAlreadyDeleted]);

  useEffect(() => {
    setTimeout(() => {
      setpersonAlreadyDeleted(undefined);
    }, 5000);
  }, [personAlreadyDeleted]);

  useEffect(() => {
    setTimeout(() => {
      setLastAddedPersonName(undefined);
    }, 5000);
  }, [personsToShow]);

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
      ...(!nameExist && { id: persons.length + new Date().getTime() }),
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

  const filterByName = name => {
    if (!name.length) {
      setPersonsToShow(persons);
      return;
    }

    setPersonsToShow(
      personsToShow.filter(person => person.name.includes(name))
    );
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
    setLastAddedPersonName(personData.name);
    setPersons(persons.concat(personData));
    setPersonsToShow(persons.concat(personData));
    setNewName("");
    setNewPhoneNumber("");
  };

  const handleDeleteClick = (selectedPersonId, selectedPersonName) => {
    const personToDelete = persons.filter(
      person => person.id === selectedPersonId
    )[0];

    if (window.confirm(`Delete ${personToDelete.name}`)) {
      deleteContact(selectedPersonId, personToDelete)
        .then(_ => {
          setPersonsToShow(
            personsToShow.filter(person => person.id !== selectedPersonId)
          );
        })
        .catch(_ => setpersonAlreadyDeleted(selectedPersonName));
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

  return (
    <div>
      <h2>Phonebook</h2>
      {personAlreadyDeleted && (
        <ErrorMessage contactName={personAlreadyDeleted} />
      )}
      {lastAddedPersonName && (
        <SuccessMessage contactName={lastAddedPersonName} />
      )}
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
