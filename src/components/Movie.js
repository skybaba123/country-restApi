import React from "react";
import "./Movie.css";

import { Link } from "react-router-dom";

const Movie = ({
  country,
  countryName,
  countryFlag,
  population,
  region,
  capital,
  toggleDarkmode,
}) => {
  return (
    <div
      style={{ background: toggleDarkmode ? "hsl(209, 23%, 22%)" : "" }}
      className="country"
    >
      <Link to="details">
        <img className="country-image" src={countryFlag} alt="country" />
        <div className="country-data">
          <h2
            style={{ color: toggleDarkmode ? "white" : "" }}
            className="country-name"
          >
            {countryName}
          </h2>
          <p
            style={{ color: toggleDarkmode ? "white" : "" }}
            className="country-population"
          >
            Population: {population}
          </p>

          <p
            style={{ color: toggleDarkmode ? "white" : "" }}
            className="country-region"
          >
            Region: {region}
          </p>
          <p
            style={{ color: toggleDarkmode ? "white" : "" }}
            className="country-capital"
          >
            Capital: {capital}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Movie;
