import React, { useEffect, useState } from 'react';
import "./browse.css"
import { signedInUserId } from '../Welcom_Page/welcome.jsx';

import {FaPlusCircle} from 'react-icons/fa';
import { BsCartPlus } from 'react-icons/bs';

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

  const addToCart = (productId, userId) => {
    const newItem = {
      id: 1,
      userId: userId,
      date: '23/05/2023-15:20',
      products: { productId: productId, quantity: 1 }
    };
    // Example data, you can change it as per your requirements
    console.log(newItem);
    // Add your logic to handle adding the item to the cart
  };

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
                  <BsCartPlus onClick={() => addToCart(product.id, signedInUserId)} className='addCartIcon'/>
            </div>
        </>
      ))}
    </div>
  );
}

export default Browsing;