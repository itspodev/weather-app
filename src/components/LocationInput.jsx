import React from "react";

export default function LocationInput({ location, onChangeLocation }) {
  return (
    <>
      <label htmlFor="location"></label>
      <input
        type="text"
        value={location}
        onChange={(event) => onChangeLocation(event.target.value)}
        placeholder="Rechercher une ville"
      ></input>
    </>
  );
}
