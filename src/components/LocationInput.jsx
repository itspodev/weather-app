import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function LocationInput({
  location,
  onChangeLocation,
  onSubmitLocation,
  onEnterKeyPress,
}) {
  return (
    <>
      <div className="search-weather-location">
        <label htmlFor="location"></label>
        <input
          type="text"
          value={location}
          onKeyPress={(e) => onEnterKeyPress(e)}
          onChange={(e) => onChangeLocation(e.target.value)}
          placeholder="Rechercher une ville"
        ></input>
        <button type="submit" onClick={() => onSubmitLocation()}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </>
  );
}
