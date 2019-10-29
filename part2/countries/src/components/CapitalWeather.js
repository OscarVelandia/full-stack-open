import React from "react";

const CapitalWeather = ({ weather }) => {
  const {
    countryCapital,
    temperature,
    wind_speed,
    wind_dir,
    weather_icons,
    weather_descriptions
  } = weather;

  return (
    <div>
      <h3>Weather in {countryCapital}</h3>
      <p>
        <b>temperature:</b> {temperature}º Celsius
      </p>
      <img src={weather_icons[0]} alt={weather_descriptions[0]} />
      <p>
        <b>wind:</b> {wind_speed}Kph direction {wind_dir}
      </p>
    </div>
  );
};

export default CapitalWeather;
