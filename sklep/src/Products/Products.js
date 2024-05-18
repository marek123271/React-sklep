import React from "react";
import "./Products.css";
import Card from "../components/Card";

function Products({ data }) {
  return (
    <section className="card-container">
      {data.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </section>
  );
}

export default Products;
