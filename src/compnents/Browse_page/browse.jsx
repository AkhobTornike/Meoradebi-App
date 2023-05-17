import React from 'react'

import './browse.css'

import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Browsing from './browsingFunction';

const Browse = () => {

  return (
    <>
        <body>
            <header>
                {
                    // There is Name of website Left side
                }
                <label className='Name'>
                    MEORA<br/>DEBI
                </label>
                <br/>

                {
                    // There is websites Search value
                }
                <label className='SearchLabel'>
                    <input type="text" placeholder='Search' className='Search'/>
                    <FaSearch className='IconSearch'/>
                </label>
                <br/><br/>
                {/* There is navigation menu */}
                <div className='nav'>                
                    <label ><Link className='myCart'>My Cart</Link></label>
                    <label ><Link className='myProd'>My Products</Link></label>
                    <label ><Link className='SignIn' to='/'>Sign In</Link></label>
            
                </div>
            </header>
                <Browsing/>
        </body>
    </>
  )
}

export default Browse