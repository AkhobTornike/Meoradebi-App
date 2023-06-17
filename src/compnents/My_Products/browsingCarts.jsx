import React, { useEffect, useState } from "react";
import "./products.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

function CartBrowsing() {
  const signedInUserId = sessionStorage.getItem('signedInUserId')
  const [carddata, setCarddata] = useState([]);
  const [productdata, setProductdata] = useState([]);

  useEffect(() => {
    const cardData = localStorage.getItem("cardData");
    setCarddata(JSON.parse(cardData));
  }, []);

  useEffect(() => {
    const storedData = localStorage.getItem("productsData");
    setProductdata(JSON.parse(storedData));
  }, []);

  const evenCardData = carddata ? carddata.filter((card) => card.userId === signedInUserId) : [];

  const handleClearCart = () => {
    const updatedCardData = carddata.filter((card) => card.userId !== signedInUserId);
    localStorage.setItem("cardData", JSON.stringify(updatedCardData));
    setCarddata(updatedCardData);
  };

  const handleDeleteProduct = (productId) => {
    const updatedCardData = carddata.filter((card) => card.userId === signedInUserId && card.products.productId !== productId);
    localStorage.setItem("cardData", JSON.stringify(updatedCardData));
    setCarddata(updatedCardData);
  };


  return (
    <>
      <Header />
      <div className="parentBox">
        {evenCardData.length !== 0 ? (
          <>
            <div className="buttons">
              <button className="clear-button" onClick={handleClearCart}>Clear</button>
              <Link to='/Browse/BuyCart' className='BackMain'>
                <button type="submit" className="buy-button">Buy</button>
              </Link>
            </div>
            {evenCardData.map((product) => {
              const validprod = productdata.find((prod) => prod.id === product.products.productId);
              return (
                <div className="cartchildBox" key={validprod.id}>
                  <img src={validprod.image} alt={validprod.title} />
                  <div className="carttextContainer">
                    <h6>Title: {validprod.title}</h6>
                    <h6>Price: {validprod.price}</h6>
                    <h6 className="cartQuantity">Quantity: {product.products.quantity}</h6>
                  </div>
                  <button className="delete-button" onClick={() => handleDeleteProduct(validprod.id)}>Delete</button>
                </div>
              );
            })}
          </>
        ) : (
          <>
            <Header />
            <h1>You have no products in your cart</h1>
          </>
        )}
      </div>
    </>
  )  
}

export default CartBrowsing;