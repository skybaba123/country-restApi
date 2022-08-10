import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { Routes, Route } from "react-router-dom";
import Details from "./components/Details";

function App() {
  const [toggleDarkmode, setToggleDarkmode] = useState(false);
  const [country, setCountry] = useState([]);
  const [display, setDisplay] = useState([]);
  const [error, setError] = useState(false);

  const mainCountry = useCallback(async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) {
      throw new Error("somthing went wrong");
    }
    const responseData = await response.json();
    setCountry(responseData);
  }, []);

  const fechCountries = useCallback(() => {
    setDisplay(country);
  }, [country]);

  useEffect(() => {
    if (country.length < 1) {
      try {
        mainCountry();
      } catch (error) {
        setError(true);
      }
    }
    if (country.length > 1) {
      fechCountries();
    }
  }, [mainCountry, fechCountries, country, country.length]);

  const darkmode = () => setToggleDarkmode(true);
  const lightmode = () => setToggleDarkmode(false);

  const toggle = () => {
    !toggleDarkmode ? darkmode() : lightmode();
  };
  return (
    <div className="app">
      <Header toggleDarkmode={toggleDarkmode} toggle={toggle} />

      <Routes>
        <Route
          path="/"
          element={
            <Body
              error={error}
              country={display}
              setCountry={setDisplay}
              fechCountries={fechCountries}
              toggleDarkmode={toggleDarkmode}
              toggle={toggle}
            />
          }
        />
        <Route
          path="/details/:countryId"
          element={<Details toggleDarkmode={toggleDarkmode} />}
        />
      </Routes>
    </div>
  );
}

export default App;
