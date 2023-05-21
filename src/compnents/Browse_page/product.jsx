import React from "react"
import { useEffect, useState } from "react" 
import { useParams } from "react-router"
import "./browse.css"
import Header from "../Header/Header"

function ProductPage() {
    const { id } = useParams()
    const storedData = JSON.parse(localStorage.getItem("productsData"));

    const currentprod = storedData.filter((prod) => prod.id == id).map((fullProduct) => fullProduct);
    console.log(currentprod + "string")
    return (
        <>
            <Header/>
                {currentprod ? (
                    <>
                    <div className="aloneParentBox">
                        <img src={currentprod[0].image} alt={currentprod[0].title} className="alonePicture"/>
                        <div className="aloneTitleDiv">
                        <p className="aloneTitle"><b>Title:</b> {currentprod[0].title}</p>
                        </div>
                        <p className="alonePrice"><b>Price:</b> {currentprod[0].price} $</p>
                        <div className="AloneDescriptionDiv">

                        <p className="AloneDescription"><b>Description</b><br/>{currentprod[0].description}</p>
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

export default ProductPage