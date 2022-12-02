import React from "react";
import WeatherCard from "./components/WeatherCard";
import { ErrorBoundary } from "react-error-boundary";

import "./assets/css/style.css";

function ErrorDisplay() {
  return (
    <WeatherCard errorCity="La ville recherchée n'est pas valide."></WeatherCard>
  );
}

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorDisplay}>
        <WeatherCard></WeatherCard>
      </ErrorBoundary>
    </div>
  );
}

export default App;
