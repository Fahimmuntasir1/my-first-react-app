import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  return (
    <div>
      <h1>Hello From Countries</h1>
      <div className="countriesStyle">
        {countries.map((country) => (
          <Country country={country} key={country.cca3}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

/* import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>Hello from Countries</h1>
      {countries.map((country) => (<Country country={country}></Country>
      ))}
    </div>
  );
};

export default Countries;
 */
