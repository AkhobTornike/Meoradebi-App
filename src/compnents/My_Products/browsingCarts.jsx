import React, { useEffect, useState } from "react";
import "./products.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { signedInUserId } from '../Welcom_Page/welcome';
import { Link } from "react-router-dom";

function CartBrowsing() {
  const [carddata, setCarddata] = useState([]);
  const [productdata, setProductdata] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cardData = localStorage.getItem("cardData");
    setCarddata(JSON.parse(cardData));
  }, []);

  useEffect(() => {
    const storedData = localStorage.getItem("productsData");
    setProductdata(JSON.parse(storedData));
  }, []);

  const evenCardData = carddata ? carddata.filter((card) => card.userId === signedInUserId) : [];

  return (
    <>
      <Header />
      <div className="parentBox">
        {evenCardData.length !== 0 ? (
          evenCardData.map((product) => {
            const validprod = productdata.find((prod) => prod.id === product.products.productId);
            return (
              <div className="cartchildBox" key={validprod.id}>
                <button>Clear</button>
                <img src={validprod.image} alt={validprod.title} />
                <div className="carttextContainer">
                  <h6>Title: {validprod.title}</h6>
                  <h6>Price: {validprod.price}</h6>
                  <h6 className="cartQuantity">Quantity: {product.products.quantity}</h6>
                </div>
                <Link to='/Browse/BuyCart' className='BackMain' ><button type="submit">Buy</button></Link>
              </div>
            );
          })
        ) : (
          <>
            <Header />
            <h1>You have no products in your cart</h1>
          </>
        )}
      </div>
    </>
  );
}

export default CartBrowsing;
