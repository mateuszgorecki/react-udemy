import React from "react";

const Result = (props) => {
  const { date, city, sunrise, sunset, temp, pressure, wind } = props.weather;
  const sunriseDate = new Date(sunrise * 1000).toLocaleTimeString();
  const sunsetDate = new Date(sunset * 1000).toLocaleTimeString();

  return (
    <ul>
      <li>Pogoda dla: {city}</li>
      <li>Dzisiejsza data i godzina: {date}</li>
      <li>Wschód słońca: {sunriseDate}</li>
      <li>Zachód słońca: {sunsetDate}</li>
      <li>Temperatura: {temp} &#176;C</li>
      <li>Ciśnienie atmosferyczne: {pressure} hPa</li>
      <li>Wiatr: {wind} m/s</li>
    </ul>
  );
};

export default Result;
