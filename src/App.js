import React from "react";
import "./assets/css/style.css";

function App() {
  const geoByCityNameAPIUrl =
    "https://api.openweathermap.org/geo/1.0/direct?q=nantes&appid=4e9176c4db0c574ed7144481800fb0dc";
  const weatherByLatLonAPIUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=5&lon=5&appid=4e9176c4db0c574ed7144481800fb0dc";
  return <div className="App"></div>;
}

export default App;
