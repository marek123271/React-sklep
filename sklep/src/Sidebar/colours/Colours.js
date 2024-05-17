import React from "react";
import "./Colours.css";
import Input from "../../components/Input";

const Colours = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title color-title">Colors</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="color" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="color"
          color="red"
          style={{ background: "red" }}
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="color"
          color="blue"
          style={{ background: "blue" }}
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="color"
          color="green"
          style={{ background: "green" }}
        />

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="color"
          color="rgb(58, 57, 56)"
          style={{ background: "black" }}
        />
        <Input
          handleChange={handleChange}
          value="white"
          title="White"
          name="color"
          color="black"
          style={{ background: "rgb(234, 230, 225)" }}
        />
      </div>
    </>
  );
};

export default Colours;
