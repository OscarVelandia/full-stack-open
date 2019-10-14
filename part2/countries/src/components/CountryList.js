import React, { useState } from "react";

import CountryListDetial from "./CountryListDetail";

const CountryList = ({ countries }) => {
  const [openDetail, setOpenDetail] = useState(Array(10).fill(false));

  const handleOpenDetailClick = idx => {
    const detail = [...openDetail];
    detail[idx] = !detail[idx];
    setOpenDetail(detail);
  };

  if (countries.length && countries.length === 1) {
    const country = countries[0];

    return <CountryListDetial country={country} />;
  } else {
    return countries.length < 10 ? (
      <ul>
        {countries.map((country, idx) => (
          <React.Fragment key={country.alpha3Code}>
            <li>{country.name}</li>
            <button onClick={() => handleOpenDetailClick(idx)}>
              Show details
            </button>
            {openDetail[idx] && <CountryListDetial country={country} />}
          </React.Fragment>
        ))}
      </ul>
    ) : (
      <p>Too Many Matches, specify another filter.</p>
    );
  }
};

export default CountryList;
