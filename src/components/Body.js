import React, { useEffect, useState, useRef, useCallback } from "react";
import "./Body.css";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import Movie from "./Movie";

const Body = ({
  error,
  toggle,
  toggleDarkmode,
  fechCountries,
  country,
  setCountry,
}) => {
  // const [searchCountry, setSearchCountry] = useState([]);
  const [input, setInput] = useState("");
  const filterInput = useRef();
  const inputRef = useRef();

  const searchForCountry = useCallback(() => {
    const search = country.filter((con) =>
      con.name.common.includes(input.charAt(0).toUpperCase() + input.slice(1))
    );
    setCountry(search);
  }, [country, input, setCountry]);

  const filtering = () => {
    const input = filterInput.current.value;
    const filter = country.filter((con) => con.continents[0].includes(input));
    setCountry(filter);
  };

  useEffect(() => {
    if (input === "") {
      fechCountries();
    } else if (input.length > 0) {
      searchForCountry();
    }
  }, [input]);

  return (
    <main style={{ background: toggleDarkmode ? "hsl(207, 26%, 17%)" : "" }}>
      <div className="input-container">
        <div className="main-input">
          <FaSearch onClick={searchForCountry} className="search" />
          <input
            style={{
              background: toggleDarkmode ? "hsl(209, 23%, 22%)" : "",
              color: toggleDarkmode ? "white" : "black",
            }}
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search for a country..."
            id="input"
          />
        </div>

        <select
          style={{ background: toggleDarkmode ? "hsl(209, 23%, 22%)" : "" }}
          id="select"
          ref={filterInput}
          onChange={filtering}
          name="Filter by Region"
        >
          <option defaultValue="Filter by Region">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
        </select>
      </div>

      <motion.div layout className="movie-container">
        {country?.length < 1 ? (
          <h2>Loading...</h2>
        ) : (
          country.map((con) => (
            <Movie
              error={error}
              country={country}
              toggleDarkmode={toggleDarkmode}
              toggle={toggle}
              key={Math.random()}
              population={con.population}
              countryFlag={con.flags.png}
              countryName={con.name.common}
              region={con.region}
              capital={con.capital}
            />
          ))
        )}
      </motion.div>
    </main>
  );
};

export default Body;
