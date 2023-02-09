export default function MainWeatherInfos({
  country = "",
  errorCity = "",
  infos = {},
}) {
  console.log(infos);
  const city = infos?.name;
  const temp = infos?.main ? `${Math.round(infos?.main?.temp)}°` : " ";
  const desc = infos?.main ? `${infos?.weather?.[0]?.main}` : "";
  const maxTemp = infos?.main
    ? `Max.${Math.round(infos?.main?.temp_max)}°`
    : "";
  const minTemp = infos?.main
    ? `Min.${Math.round(infos?.main?.temp_min)}°`
    : "";
  return (
    <div className="main-weather-infos">
      <h2 className="main-weather-infos__city">
        {city}
        <span>{country ? ` (${country})` : ""}</span>
      </h2>
      <h1 className="main-weather-infos__temp">{temp}</h1>
      <p className="main-weather-infos__desc">{desc}</p>
      <p className="main-weather-infos__maxmin">
        <span>{maxTemp}</span>
        <span> {minTemp}</span>
      </p>
      <p className="main-weather-infos__error">{errorCity}</p>
    </div>
  );
}
