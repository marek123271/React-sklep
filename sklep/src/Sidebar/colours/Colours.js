import React from "react";
import "./Colours.css";
import Input from "../../components/Input";

const Colours = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title color-title"></h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="color" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="color"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="color"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="color"
        />

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="color"
        />
      </div>
    </>
  );
};

export default Colours;
