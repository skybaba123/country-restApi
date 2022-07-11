import * as React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { Routes, Route } from "react-router-dom";
import Details from "./components/Details";

function App() {
  const [toggleDarkmode, setToggleDarkmode] = useState(false);
  const [country, setCountry] = useState([]);
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    if (country.length < 1) {
      mainCountry();
    }
    if (country.length > 1) {
      fechCountries();
    }
  }, [country]);

  const mainCountry = async () => {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const countries = await data.json();
    setCountry(countries);
  };

  const fechCountries = () => {
    setDisplay(country);
  };

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
              country={display}
              setCountry={setDisplay}
              fechCountries={fechCountries}
              toggleDarkmode={toggleDarkmode}
              toggle={toggle}
            />
          }
        />
        <Route path="details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
