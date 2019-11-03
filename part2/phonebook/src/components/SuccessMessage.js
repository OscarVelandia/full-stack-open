import React from "react";

function SuccessMessage({ contactName }) {
  const successMessageStyle = {
    width: "50%",
    color: "green",
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    textAlign: "center"
  };

  return <div style={successMessageStyle}>Added {contactName}</div>;
}

export default SuccessMessage;
