import React from "react";
import "./Country.css";

const Country = (props) => {
  //   const { common, area } = props?.country?.name;
  return (
    <div className="display">
      <h2>{props.country?.name.common}</h2>
      <p>Area-{props.country?.area} sq. km</p>
      <p>Region-{props.country?.region}</p>
      <p>{props.country?.ccn3}</p>
      <img src={props.country?.flags.png} alt="" />
    </div>
  );
};

export default Country;
