import React from "react";
import "./input.css";

const Input = ({ handleChange, value, title, name, style }) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className="checkmark" style={style}></span>
      {title}
    </label>
  );
};

export default Input;
