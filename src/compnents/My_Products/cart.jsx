import React from "react";
// import "./browse.css"
import "./products.css"


import Header from "../Header/Header";

import { useParams } from "react-router";
// import { BsCartPlus } from 'react-icons/ba';

function Cart() {

    const { id } = useParams()
    const storedData = JSON.parse(localStorage.getItem("productsData"));

    const currentprod = storedData.filter((prod) => prod.id == id).map((fullProduct) => fullProduct);
    console.log(currentprod + "string")

    const shortenText = (text, maxLength) => {
        if (text.length <= maxLength) {
          return text
        }
        return text.slice(0, maxLength) + '...'
      }

    return (
        <>
            <Header/>
                {currentprod ? (
                    <>
                <div className='cartchildBox'>
                    <img src={currentprod[0].image} alt={currentprod[0].title} /> 
                    <div className='carttextContainer'>
                        <h6 className="cartTitle">Title: {currentprod[0].title}</h6>
                        <h6 className="cartPrice">Price: {currentprod[0].price} $</h6>
                    </div>
                </div>
                        </>
                ) : (
                    <p>Loading...</p>
                )
            }
        </>
    )
}

export default Cart