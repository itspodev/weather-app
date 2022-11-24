import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function LocationInput({ location, onChangeLocation }) {
  return (
    <>
      <div className="search-weather-location">
        <label htmlFor="location"></label>
        <input
          type="text"
          value={location}
          onChange={(event) => onChangeLocation(event.target.value)}
          placeholder="Rechercher une ville"
        ></input>
        <button type="submit" onSubmit={(e) => e.preventDefault}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </>
  );
}
