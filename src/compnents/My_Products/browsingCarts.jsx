import React from "react";
import "./products.css"

import { useEffect, useState } from "react";

import Header from "../Header/Header";
import { signedInUserId } from '../Welcom_Page/welcome';


  function CartBrowsing() {
      const [carddata, setCarddata] = useState([])
      const [productdata, setProductdata] = useState([])

      useEffect(() => {
        const cardData = localStorage.getItem("cardData")
        setCarddata(JSON.parse(cardData))
      }, [])

      const evenCardData = carddata.filter((card) => card.userId === signedInUserId)
      console.log(evenCardData)

      useEffect(() => {
        const storedData = localStorage.getItem("productsData");
        setProductdata(JSON.parse(storedData))
      }, [])


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
                          <h6 className="cartQuantity">Quantity:</h6>
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