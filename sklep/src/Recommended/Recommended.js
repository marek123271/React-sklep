import React, { Component } from 'react';
import "./Recommended.css"

export default class Recommended extends Component {
  handleCompanyClick = (company) => {
    this.props.onCompanyChange(company);
  };

  render() {
    return (
      <>
        <h2 className='recommended-title'>Recommended</h2>
        <div className='recommended-flex'>
          <button className="btns" onClick={() => this.handleCompanyClick('')}>All Products</button>
          <button className="btns" onClick={() => this.handleCompanyClick('Nike')}>Nike</button>
          <button className="btns" onClick={() => this.handleCompanyClick('Armani')}>Armani</button>
          <button className="btns" onClick={() => this.handleCompanyClick('Puma')}>Puma</button>
          <button className="btns" onClick={() => this.handleCompanyClick('Vans')}>Vans</button>
        </div>
      </> 
    );
  }
}
