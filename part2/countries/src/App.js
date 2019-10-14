import React, { useState, useEffect } from "react";
import axios from "axios";

import FilterForm from "./components/FilterForm";
import CountryList from "./components/CountryList";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(countriesInfo => {
      setCountries(countriesInfo.data);
    });
  }, []);

  const filterByCountry = name => {
    if (name.length) {
      setCountriesToShow(
        countries.filter(country =>
          country.name.toLowerCase().includes(name.toLowerCase())
        )
      );
    } else {
      setCountriesToShow([]);
    }
  };

  const handleFilterChange = event => {
    filterByCountry(event.target.value);
  };

  return (
    <div>
      <h1>Countries Searcher</h1>
      <FilterForm onChange={handleFilterChange} />
      {countriesToShow.length > 0 && (
        <CountryList countries={countriesToShow} />
      )}
    </div>
  );
};

export default App;
