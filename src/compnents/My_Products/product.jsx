// import "./browse.css"
// import "./products.css"

import { useParams } from "react-router"
import { BsCartPlus } from 'react-icons/bs';

import { Link } from 'react-router-dom';

import Header from "../Header/Header"

function ProductPage() {
    const { id } = useParams()
    const storedData = JSON.parse(localStorage.getItem("productsData"));
    
    const currentprod = storedData.filter((prod) => prod.id == id).map((fullProduct) => fullProduct);
    

    console.log("currentprod: " +  currentprod[0].id)

    return (
        <>
            <Header/>
                {currentprod ? (
                    <>
                    <div className="productParentBox">
                        <img src={currentprod[0].image} alt={currentprod[0].title} className="productPicture"/>
                        <div className="productTitleDiv">
                        <p className="productTitle"><b>Title:</b> {currentprod[0].title}</p>
                        </div>
                        <p className="productPrice"><b>Price:</b> {currentprod[0].price} $</p>
                        <div className="productDescriptionDiv">

                        <p className="productDescription"><b>Description</b><br/>{currentprod[0].description}</p>
                        </div>
                        <Link to={`/Browse/mycart/${currentprod[0].id}`}>  
                            <BsCartPlus className='productAddCartIcon'/>
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

export default ProductPage