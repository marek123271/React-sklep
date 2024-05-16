import React, { Component } from 'react'
import "./Recommended.css"

export default class Recommended extends Component {
  render() {
    return (
      <>
      
      <h2 className='recommended-title'>Recommended</h2>
      <div className='recommended-flex'>
        <button className="btns">All Products</button>
        <button className="btns">Nike</button>
        <button className="btns">Adidas</button>
        <button className="btns">Puma</button>
        <button className="btns">Vans</button>
      </div>
      </> 
      
    )
  }
}
