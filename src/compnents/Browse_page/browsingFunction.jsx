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
    const now = new Date();
    const date = now.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    const time = now.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    const dateTimeString = `${date}:${time}`;

    const existingCartData = localStorage.getItem('cardData');
    let cartData = [];
  
    if (existingCartData) {
      cartData = JSON.parse(existingCartData);
    }

    let quantityString;
    let quantity;
  
    while (true) {
      quantityString = window.prompt('Enter the quantity:');
  
      // Validate if the quantity is a number
      if (/^\d+$/.test(quantityString)) {
        quantity = parseInt(quantityString);
        break;
      }
  
      // Display error message if the quantity is not a number
      window.alert('Please enter a valid quantity (numbers only).');
    }
  
    // Calculate the new item id
    const newItemId = cartData.length > 0 ? cartData[cartData.length - 1].id + 1 : 1;
  
    const newItem = {
      id: newItemId,
      userId: userId,
      date: dateTimeString,
      products: { productId: productId, quantity: quantity  },
    };
  
    // Add newItem to the cartData
    cartData.push(newItem);
  
    // Store updated cartData in localStorage
    localStorage.setItem('cardData', JSON.stringify(cartData));


    // const newItem = {
    //   id: 1,
    //   userId: userId,
    //   date: dateTimeString,
    //   products: { productId: productId, quantity: 1 }
    // };
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
                <Link to={`/Browse/mycart/${product.id}`}>
                  <BsCartPlus onClick={() => addToCart(product.id, signedInUserId)} className='addCartIcon'/>
                </Link>
            </div>
        </>
      ))}
    </div>
  );
}

export default Browsing;