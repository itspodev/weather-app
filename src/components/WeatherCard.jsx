import React from "react";
import MainWeatherInfos from "../MainWeatherInfos";
import ExtraWeatherInfos from "./ExtraWeatherInfos";
import LocationInput from "./LocationInput";

export default function WeatherCard() {
  const [data, setData] = React.useState({});
  const [location, setLocation] = React.useState("");

  const geoByCityNameAPIUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=4e9176c4db0c574ed7144481800fb0dc`;
  const weatherByLatLonAPIUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=5&lon=5&appid=4e9176c4db0c574ed7144481800fb0dc";

  console.log(location);

  return (
    <article className="weather-card">
      <LocationInput
        location={location}
        onChangeLocation={setLocation}
      ></LocationInput>
      <MainWeatherInfos></MainWeatherInfos>
      <div className="extra-weather-infos">
        <ExtraWeatherInfos name="feels" content="65°F"></ExtraWeatherInfos>
        <ExtraWeatherInfos name="humidity" content="20%"></ExtraWeatherInfos>
        <ExtraWeatherInfos name="wind" content="12 MPH"></ExtraWeatherInfos>
      </div>
    </article>
  );
}
