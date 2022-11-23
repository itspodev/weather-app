import MainWeatherInfos from "../MainWeatherInfos";
import ExtraWeatherInfos from "./ExtraWeatherInfos";

export default function WeatherCard() {
  const geoByCityNameAPIUrl =
    "https://api.openweathermap.org/geo/1.0/direct?q=nantes&appid=4e9176c4db0c574ed7144481800fb0dc";
  const weatherByLatLonAPIUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=5&lon=5&appid=4e9176c4db0c574ed7144481800fb0dc";

  return (
    <article className="weather-card">
      <MainWeatherInfos></MainWeatherInfos>
      <div className="extra-weather-infos">
        <ExtraWeatherInfos name="feels" content="65°F"></ExtraWeatherInfos>
        <ExtraWeatherInfos name="humidity" content="20%"></ExtraWeatherInfos>
        <ExtraWeatherInfos name="wind" content="12 MPH"></ExtraWeatherInfos>
      </div>
    </article>
  );
}
