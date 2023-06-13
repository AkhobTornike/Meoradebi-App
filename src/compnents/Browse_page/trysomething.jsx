import React, { useEffect, useState } from 'react';
import React from 'react'
import { useParams } from "react-router"


function trysomething() {
    const { id } = useParams()
    const storedData = JSON.parse(localStorage.getItem("productsData"));

    const currentprod = storedData.filter((prod) => prod.id == id).map((fullProduct) => fullProduct);
    console.log("currentprod: " +  currentprod[0].id)

    const { Id } = useParams()
    const storedUserData = JSON.parse(localStorage.getItem("usersData"));

    const currentuser = storedUserData.filter((user) => user.id == Id).map((fulluser) => fulluser);
    console.log("currentuser: " +  currentuser[0].id)

    const [cartData, setCartData] = useState([]);

    useEffect(() => {
      // Retrieve cart data from localStorage on component mount
      const storedCartData = localStorage.getItem('usersCart');
      if (storedCartData) {
        setCartData(JSON.parse(storedCartData));
      }
    }, []);
  
    useEffect(() => {
      // Update localStorage whenever cartData changes
      localStorage.setItem('usersCart', JSON.stringify(cartData));
    }, [cartData]);
}

export default trysomething



























// import React from "react"
// import { useEffect, useState } from "react" 
// import { useParams } from "react-router"


// function Papa() {
//     const [product, setProduct] = useState(null)
//     const { id } = useParams()

//     useEffect(() => {
//         fetchData();
//     }, [])

//     const fetchData = async() => {
//         try {
//             const response = await fetch(`https://fakestoreapi.com/products/${id}`)
//             const jsonData = await response.json()
//             setProduct(jsonData)
//         } catch (error) {
//             console.error("Error fetching data:", error)
//         }
//     }

//     return (
//         <>
//                 {product ? (
//                     <>
//                     <h2>{product.title}</h2>
//                     <img src={product.image} alt={product.title}/>
//                     <p>{product.price}</p>
//                     <p>{product.description}</p>
//                     </>
//                 ) : (
//                     <p>Loading...</p>
//                 )
//             }
//         </>
//     )
// }

// export default Papa