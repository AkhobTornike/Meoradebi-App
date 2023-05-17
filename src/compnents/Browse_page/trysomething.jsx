import React from "react"
import { useEffect, useState } from "react" 
import { useParams } from "react-router"


function Papa() {
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
                {product ? (
                    <>
                    <h2>{product.title}</h2>
                    <img src={product.image} alt={product.title}/>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                    </>
                ) : (
                    <p>Loading...</p>
                )
            }
        </>
    )
}

export default Papa