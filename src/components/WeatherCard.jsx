import React from "react";
import MainWeatherInfos from "../MainWeatherInfos";
import ExtraWeatherInfos from "./ExtraWeatherInfos";
import LocationInput from "./LocationInput";

export default function WeatherCard({ errorCity = "" }) {
  const apiKey = "4e9176c4db0c574ed7144481800fb0dc";
  const [city, setCity] = React.useState("");
  const [dataByName, setDataByName] = React.useState({});
  const [data, setData] = React.useState({});
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [isBugged] = React.useState(`${error ? true : false}`);

  React.useEffect(() => {
    if (isLoaded) {
      const geoByCityNameAPIUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
      fetch(geoByCityNameAPIUrl)
        .then((res) => res.json())
        .then((data) => {
          setDataByName(data[0]);
        })
        .catch((err) => {
          console.log("error : ", err);
          setError(err);
        });
    }
    return () => {
      setIsLoaded(false);
    };
  }, [city, isLoaded]);

  React.useEffect(() => {
    if (dataByName.lat !== undefined) {
      const weatherByLatLonAPIUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${dataByName?.lat}&lon=${dataByName?.lon}&appid=${apiKey}&units=metric`;
      fetch(weatherByLatLonAPIUrl)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
  }, [dataByName]);

  if (error) {
    throw error;
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setIsLoaded(true);
    }
  };

  const handleLocationInfos = () => {
    setIsLoaded(true);
  };

  return (
    <article className="weather-card">
      <LocationInput
        location={city}
        onChangeLocation={setCity}
        onSubmitLocation={handleLocationInfos}
        onEnterKeyPress={handleKeyPress}
      ></LocationInput>
      <MainWeatherInfos
        infos={data}
        // city={data.name}
        country={dataByName?.country}
        // temp={data.main ? `${Math.round(data.main.temp)}°` : ""}
        // desc={data.main ? `${data.weather[0].main}` : ""}
        // maxTemp={data.main ? `Max.${Math.round(data.main.temp_max)}°` : ""}
        // minTemp={data.main ? `Min.${Math.round(data.main.temp_min)}°` : ""}
        errorCity={isBugged ? errorCity : ""}
      ></MainWeatherInfos>
      <div className="extra-weather-infos">
        <ExtraWeatherInfos
          name="feels like"
          content={data.main ? `${Math.round(data.main.feels_like)}°` : ""}
        ></ExtraWeatherInfos>
        <ExtraWeatherInfos
          name="humidity"
          content={data.main ? `${data.main.humidity}%` : ""}
        ></ExtraWeatherInfos>
        <ExtraWeatherInfos
          name="wind"
          content={
            data.main ? `${Math.round(data.wind.speed * 1.49)} km/h` : ""
          }
        ></ExtraWeatherInfos>
      </div>
    </article>
  );
}
