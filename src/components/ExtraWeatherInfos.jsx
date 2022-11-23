export default function ExtraWeatherInfos({ name, content }) {
  return (
    <div className={`extra-weather-infos__${name}`}>
      <p>{name}</p>
      <p>{content}</p>
    </div>
  );
}
