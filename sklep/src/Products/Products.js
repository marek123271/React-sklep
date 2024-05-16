import React, { Component } from 'react'
import './Products.css';
import { FaStar } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";



export default class Products extends Component {
  render() {
    return (
      <section className="card-container">
        <section className="card">
         <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt='Shoe'/>
         <div className='card-detalis'>
          <h3 className='cart-title'>Shoe</h3>
          <section className='card-reviews'>
          <FaStar /><FaStar /><FaStar /><FaStar />
          <span className='total-reviews'>4</span>
          </section>
          <section className='card-price'>
            <div className='price'>
              <del>300£</del>£200
            </div>
            <div className='bag'>
            <IoBagAdd />


            </div>
          </section>
         </div>
        </section>
      </section>
    )
  }
}