import React from "react";
import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div className="category-container">
      <h2 className="sidebar-title category-title">Category</h2>

      <div className="category-list">
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
          style={{ background: "red" }}
        />

        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
          style={{ background: "blue" }}
        />

        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
          style={{ background: "green" }}
        />

        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
          style={{ background: "black" }}
        />
      </div>
    </div>
  );
}

export default Category;
