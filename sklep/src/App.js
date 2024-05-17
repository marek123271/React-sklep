import React,{ useState } from 'react';
import Navigation from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Category from './Sidebar/Category/Category';
import Price from './Sidebar/Price/Price';
import Sidebar from './Sidebar/Sidebar';
import Data from './db/data';
import './app.css'; // Check this line
import Card from './components/Card';


//Database import
import products from './db/data';


function App() {

  const [selectesCategory, setSelectedCategory] = useState(null);

    //--------input filter------------
    const [search, setSearch] = useState('');
  
    const handleInputChange = event =>{
      setSearch(event.target.value);
      
    }

    const filteredItems = Data.filter(product=>
      product.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()!==-1));

          //--------radio filter------------
        const handleChange = event =>{
          setSelectedCategory(event.target.value)
        };


        //--------Btns filter------------
        const handleClick = event =>{
          setSelectedCategory(event.target.value)
        };


        function filteredData(Data,selected,search){
          let filteredProducts = Data;
          //filtering input items
          if(search){
            filteredProducts = filteredItems;
        };

        //selected Filter
        if(selected){
          filteredProducts = filteredProducts.filter(
            ({category,color,company,newPrice,title})=>
              category === selected ||
             color===selected ||
              company === selected ||
               newPrice ===selected ||
                title === selected
)
        }
        return filteredProducts.map(
          ({ img, title, star, reviews,prevPrice, newPrice }) => (
          <Card
            key={Math.random()}
            img={img}
            title={title}
            star={star}
            reviews={reviews}
            newPrice={newPrice}
            prevPrice={prevPrice}
          />
        ));
        
      };

      const result = filteredData(products,selectesCategory,search);

    return (
    <>
    <Sidebar handleChange={handleChange}/>
    
      <Navigation />
      <Recommended />
      <Products />
      
      
      
    </>
  );
}

export default App;
