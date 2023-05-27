import React from "react";
import "./products.css"

import Header from "../Header/Header";

import { Link } from 'react-router-dom';
import { useParams } from "react-router";

import {MdOutlineDoneOutline} from 'react-icons/md';

function Cart() {

    const { id } = useParams()
    const addCartData = JSON.parse(localStorage.getItem("productsData"));
    const currentcard = addCartData.filter((prod) => prod.id == id).map((fullProduct) => fullProduct);

    const cardData = JSON.parse(localStorage.getItem("cardData"));
    const currentItem = cardData.find(item => item.products.productId === parseInt(id, 10));
    const itemQuantity = currentItem ? currentItem.products.quantity : 0;

    console.log("currentprod: " +  currentcard[0].id)


    return (
        <>
            <Header/>
                {currentcard ? (
                    <>
                <div className='cartchildBox'>
                    <img src={currentcard[0].image} alt={currentcard[0].title} /> 
                    <div className='carttextContainer'>
                        <h6 className="cartTitle">Title: {currentcard[0].title}</h6>
                        <h6 className="cartPrice">Price: {currentcard[0].price} $</h6>
                        <h6 className="cartQuantity">Quantity: {itemQuantity}</h6>
                    </div>
                    <Link to='/Browse' className="linkDoneIcon">
                        <MdOutlineDoneOutline className="doneIcon"/>
                    </Link>
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