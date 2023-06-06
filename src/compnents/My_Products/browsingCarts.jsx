import React from "react";
import "./products.css"

import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import Header from "../Header/Header";
import { signedInUserId } from '../Welcom_Page/welcome';


  function CartBrowsing() {
      const [carddata, setCarddata] = useState([])
      const [productdata, setProductdata] = useState([])
      const navigate = useNavigate();

      useEffect(() => {
        const cardData = localStorage.getItem("cardData")
        setCarddata(JSON.parse(cardData))
      }, [])

      const evenCardData = carddata.filter((card) => card.userId === signedInUserId)

      useEffect(() => {
        const storedData = localStorage.getItem("productsData");
        setProductdata(JSON.parse(storedData))
      }, [])
      
      useEffect(() => {
        if (evenCardData.length === 0) {
          // If there are no items in the cart, show an alert and navigate back to the browse page
          alert('You have no products in your cart');
          navigate('/browse'); // Replace '/browse' with the actual URL for your browse page
        }
      }, [evenCardData, navigate]);

      return (
          <>
              <Header/>
              <div className="parentBox">
                {evenCardData.map((product) => {
                  const validprod = productdata.find((prod) => prod.id == product.products.productId)
                  return (
                    <>
                      <div className="cartchildBox">
                        <img src={validprod.image} alt={validprod.title} />
                        <div className="carttextContainer">
                          <h6 className="">Title: {validprod.title}</h6>
                          <h6 className="">Price: {validprod.price}</h6>
                          <h6 className="cartQuantity">Quantity: {product.products.quantity}</h6>
                        </div>
                      </div>
                    </>
                  )
                })}
            </div>
          </>
      )
  }

export default CartBrowsing