import React from "react";
import "./Products.css";
import Card from "../components/Card";
import data from "../db/data"; // Assuming you have imported your data

function Products() {
  return (
    <section className="card-container">
      {data.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </section>
  );
}

export default Products;
