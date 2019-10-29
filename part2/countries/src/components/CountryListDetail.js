import React, { useState, useEffect } from "react";
import axios from "axios";

import CapitalWeather from "./CapitalWeather";
import CountryDetail from "./CountryDetail";

const CountryListDetail = ({ country }) => {
  const [capitalWeather, setCapitalWeather] = useState();

  useEffect(() => {
    const weatherKey = process.env.REACT_APP_WEATHER_API_KEY;
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${weatherKey}query=${country.name}`
      )
      .then(weather => {
        setCapitalWeather({
          ...weather.data.current,
          countryCapital: weather.data.location.name
        });
      });
  }, [country.name]);

  return (
    <React.Fragment>
      <CountryDetail countryInfo={country} />
      {capitalWeather && <CapitalWeather weather={capitalWeather} />}
    </React.Fragment>
  );
};

export default CountryListDetail;
