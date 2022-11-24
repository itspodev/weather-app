import React from "react";
import MainWeatherInfos from "../MainWeatherInfos";
import ExtraWeatherInfos from "./ExtraWeatherInfos";
import LocationInput from "./LocationInput";

export default function WeatherCard() {
  const [data, setData] = React.useState({});
  const [location, setLocation] = React.useState("");
  const apiKey = "4e9176c4db0c574ed7144481800fb0dc";

  const geoByCityNameAPIUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${apiKey}`;
  const weatherByLatLonAPIUrl = `https://api.openweathermap.org/data/2.5/weather?lat=5&lon=5&appid=${apiKey}`;

  // fetch(geoByCityNameAPIUrl).then((res) => {
  //   setData(res.json());
  //   console.log(data);
  // });
  const fetchbyCityName = () => {};

  const fetchbyLatLon = () => {};

  const handleLocationInfos = () => {
    console.log(location);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log(location);
    }
  };

  return (
    <article className="weather-card">
      <LocationInput
        location={location}
        onChangeLocation={setLocation}
        onSubmitLocation={handleLocationInfos}
        onEnterKeyPress={(e) => handleKeyPress}
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
