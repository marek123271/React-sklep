import React from "react";
import { FaStar } from "react-icons/fa";
import { BsFillBagFill } from "react-icons/bs";

const Card = ({ product }) => {
  const { img, title, star, reviews, prevPrice, newPrice } = product;

  return (
    <section className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          <FaStar className="rating-star" />
          <FaStar className="rating-star" />
          <FaStar className="rating-star" />
          <FaStar className="rating-star" />
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
          </div>
          <div className="bag">
            <BsFillBagFill className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
