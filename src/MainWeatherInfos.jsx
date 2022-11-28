export default function MainWeatherInfos({
  city = "",
  country = "",
  temp = "",
  desc = "",
  maxTemp = "",
  minTemp = "",
}) {
  return (
    <div className="main-weather-infos">
      <h2 className="main-weather-infos__city">
        {city}
        <span>{country}</span>
      </h2>
      <h1 className="main-weather-infos__temp">{temp}</h1>
      <p className="main-weather-infos__desc">{desc}</p>
      <p className="main-weather-infos__maxmin">
        <span>{maxTemp}</span>
        <span> {minTemp}</span>
      </p>
    </div>
  );
}
