import React, { useState } from 'react'

import './Header.css'

import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { isVariableTrue } from '../Welcom_Page/welcome';

const Header = () => {

    console.log("isvariabletrue response: ", isVariableTrue)

  return (
            <header>
                {
                    // There is Name of website Left side
                }
                {isVariableTrue ? (
                        <Link to="/browse">
                        <label className='Name'>
                            MEORA<br/>DEBI
                        </label>
                        <br/>
                    </Link>
                ) : (   
                    <Link to="/">
                    <label className='Name'>
                        MEORA<br/>DEBI
                    </label>
                    <br/>
                </Link>
                )}


                {
                    // There is websites Search value
                }
                <label className='SearchLabel'>
                    <input type="text" placeholder='Search' className='Search'/>
                    <FaSearch className='IconSearch'/>
                </label>
                <br/><br/>
                {/* There is navigation menu */}
                {isVariableTrue ? (
                    <div className='nav'>                
                        <label ><Link to='/myProduct' className='myProd'>My Products</Link></label>
                        <label ><Link className='SignIn' to='/browse'>Sign In</Link></label>
                        <label ><Link to='/browse' className='myCart'>My Cart</Link></label>
                    </div>
                ) : (
                    <div className='nav'>                
                        <label ><Link to='/' className='myCart'>My Cart</Link></label>
                        <label ><Link to='/' className='myProd'>My Products</Link></label>
                        <label ><Link className='SignIn' to='/'>Sign In</Link></label>
                    </div>
                )}

            </header>
  )
}

export default Header