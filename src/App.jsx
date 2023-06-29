import React from "react"

import Welcome from "./compnents/Welcom_Page/welcome"
import SignUp from "./compnents/signUp_page/signup"
import Forgot from "./compnents/forgot_page/forgot"
// import Browse from "./compnents/Browse_page/browse.jsx" 
import Browsing from "./compnents/Browse_page/browsingFunction"
import ProductPage from "./compnents/My_Products/product"
import MyProducts from "./compnents/My_Products/myProducts"
import Cart from "./compnents/My_Products/cart"
import CartBrowsing from "./compnents/My_Products/browsingCarts"
import MyProfile from "./compnents/signUp_page/profile"
import BuyCart from "./compnents/My_Products/BuyCart"

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <>
     <Router>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/forgotPassword' element={<Forgot/>}/>
          <Route path='/Browse' element={<Browsing/>}/> 
          <Route path="/Browse/product/:id" element={<ProductPage/>}/>
          <Route path="/myProduct" element={<MyProducts/>}/>
          <Route path="/Browse/mycart/:id" element={<Cart/>}/>
          <Route path="/Browse/mycarts" element={<CartBrowsing/>}/>
          <Route path="/Browse/MyProfile" element={<MyProfile/>}/>
          <Route path="/Browse/BuyCart" element={<BuyCart/>}/>
        </Routes>
     </Router>

    </>
  )
}

export default App
