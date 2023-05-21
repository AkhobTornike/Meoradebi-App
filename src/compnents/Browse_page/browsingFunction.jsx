import React, { useEffect, useState } from 'react';
import "./browse.css"
import {FaPlusCircle} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Browsing() {

  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("productsData");
    if (storedData) {
      setProducts(JSON.parse(storedData));
    } else {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/');
      console.log(response);
      const jsonData = await response.json();
        setProducts(jsonData);
        localStorage.setItem("productsData", JSON.stringify(jsonData));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const shortenText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text
    }
    return text.slice(0, maxLength) + '...'
  }


  return (
    <div className='parrentBox'>
      {products.map((product) => (
        <>
            <div className='childBox' key={product.id}>
                <img src={product.image} alt={product.title} /> 
                <div className='textContainer'>
                <h6>{shortenText(product.title, 15)}</h6>
                <h6>{product.price} $</h6>
                </div>
                <Link to={`/Browse/product/${product.id}`}>  
                  <FaPlusCircle className='seeMoreIcon'/>
                </Link>
            </div>
        </>
      ))}
    </div>
  );
}

export default Browsing;