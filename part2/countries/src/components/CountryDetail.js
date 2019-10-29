import React from "react";

const CountryDetail = ({ countryInfo }) => {
  const { name, capital, population, languages, flag } = countryInfo;

  return (
    <div>
      <h2>{name}</h2>
      <p>
        <b>Capital:</b> {capital}
      </p>
      <p>
        <b>Population:</b> {population}
      </p>
      <h3>Languages</h3>
      <ul>
        {languages.map((lang, idx) => (
          <li key={idx}>{lang.name}</li>
        ))}
      </ul>
      <img
        style={{ maxWidth: "10rem", marginTop: "1rem", marginBottom: "2rem" }}
        src={flag}
        alt={`${name} flag`}
      ></img>
    </div>
  );
};

export default CountryDetail;
