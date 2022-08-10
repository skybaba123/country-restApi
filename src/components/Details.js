import React from "react";
import { Link, useParams } from "react-router-dom";
import { allCountry } from "../store/all-country";
import classes from "./Details.module.css";

const Details = ({ toggleDarkmode }) => {
  const params = useParams();
  const singleCountry = allCountry.find(
    (con) => con.name.common === params.countryId
  );

  const nativeName = singleCountry.altSpellings.length < 2 ? 0 : 1;
  const lightText = toggleDarkmode ? classes.light : "";

  return (
    <main
      style={{
        background: toggleDarkmode ? "hsl(207, 26%, 17%)" : "",
      }}
      className={classes.details}
    >
      <div className={`${classes.mainDetails} ${lightText}`}>
        <div>
          <button>
            <Link to="/">Back</Link>
          </button>

          <img alt="country" src={singleCountry.flags.png} />
        </div>

        <div>
          <h1>{singleCountry.name.common}</h1>
          <p>Native Name: {singleCountry.altSpellings[nativeName]}</p>
          <p>Population: {singleCountry.population}</p>
          <p>Region: {singleCountry.region}</p>
          <p>Sub Region: {singleCountry.subregion}</p>
          <p>capital: {singleCountry.capital}</p>
          <p>Border: {}</p>
        </div>
        <div className={classes}>
          <p>Top Level Domain: {singleCountry.tld[0]}</p>
          <p>Currencies: {}</p>
          <p>Language: {singleCountry.languages.eng}</p>
        </div>
      </div>
    </main>
  );
};

export default Details;
