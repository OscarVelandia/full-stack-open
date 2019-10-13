import React from "react";

const AddUserForm = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <h3>Add a new</h3>
      <div>
        name:
        <input value={value.newName} onChange={onChange.handleNameChange} />
      </div>
      <div>
        phone number:
        <input
          value={value.newPhoneNumber}
          onChange={onChange.handlePhoneNumberChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default AddUserForm;
