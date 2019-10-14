import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryListDetail = ({ country }) => {
  const { name, capital, population, languages, flag } = country;
  // const [countryWeather, setcountryWeather] = useState([]);

  useEffect(() => {
    const weatherKey = process.env.REACT_APP_WEATHER_API_KEY;
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${weatherKey}query=${name}`
      )
      .then(bla => console.log(bla.data));
  }, [name]);

  return (
    <>
      <h2>{name}</h2>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <h2>Languages</h2>
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
    </>
  );
};

export default CountryListDetail;
