import React from "react";

function ErrorMessage({ contactName }) {
  const errorMessageStyle = {
    width: "50%",
    color: "red",
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    textAlign: "center"
  };

  return (
    <div style={errorMessageStyle}>
      Information of {contactName} has already been removed from server
    </div>
  );
}

export default ErrorMessage;
