import { useState } from 'react'

import Browsing from './compnents/Browse_page/browsingFunction'
import Welcome from "./compnents/Welcom_Page/welcome"
import SignUp from "./compnents/signUp_page/signup"
import Forgot from "./compnents/forgot_page/forgot"
import Browse from "./compnents/Browse_page/browse"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
     <Router>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/forgotPassword' element={<Forgot/>}/>
          <Route path='/Browse' element={<Browse/>}/>
        </Routes>
     </Router>
     {/* <Browsing/> */}
    </>
  )
}

export default App
