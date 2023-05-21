import React from "react"

import Welcome from "./compnents/Welcom_Page/welcome"
import SignUp from "./compnents/signUp_page/signup"
import Forgot from "./compnents/forgot_page/forgot"
import Browse from "./compnents/Browse_page/browse.jsx" 
import ProductPage from "./compnents/Browse_page/product"
import MyProducts from "./compnents/My_Products/myProducts"


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductPageee from "./compnents/Browse_page/trysomething"
import { AuthProvider } from "./compnents/Header/AuthContext"

function App() {


  return (
    <>
    {/* <Papa/> */}
    <AuthProvider>
     <Router>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/forgotPassword' element={<Forgot/>}/>
          <Route path='/Browse' element={<Browse/>}/> 
          <Route path="/Browse/product/:id" element={<ProductPage/>}/>
          <Route path="/myProduct" element={<MyProducts/>}/>
        </Routes>
     </Router>
    </AuthProvider>

     {/* <Product/> */}
    </>
  )
}

export default App
