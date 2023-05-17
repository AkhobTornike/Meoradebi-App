import React from "react"
import { useEffect, useState } from "react" 
import { useParams } from "react-router"
import "./browse.css"
import Header from "./Header"

function ProductPage() {
    const [product, setProduct] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const jsonData = await response.json()
            setProduct(jsonData)
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }

    return (
        <>
            <Header/>
                {product ? (
                    <>
                    <div className="aloneParentBox">
                        <img src={product.image} alt={product.title} className="alonePicture"/>
                        <div className="aloneTitleDiv">
                        <p className="aloneTitle"><b>Title:</b> {product.title}</p>
                        </div>
                        <p className="alonePrice"><b>Price:</b> {product.price} $</p>
                        <div className="AloneDescriptionDiv">

                        <p className="AloneDescription"><b>Description</b><br/>{product.description}</p>
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