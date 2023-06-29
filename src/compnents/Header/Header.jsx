import React, { useState } from 'react'

// import './Header.css'

import {FaSearch, FaUserAlt, FaSignOutAlt } from 'react-icons/fa';
import { BsFillCartFill, BsInfoSquareFill } from 'react-icons/bs';
import { MdBookmarkBorder} from 'react-icons/md';
import { Link } from 'react-router-dom';

const Header = ({ onSearch }) => {
    const isVariableTrue = JSON.parse(sessionStorage.getItem('isVariableTrue'))
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = (event) => {
      const { value } = event.target;
      setSearchTerm(value);
      onSearch(value);
    };
  


    function refreshPage() {
        location.reload();
        isVariableTrue = False
      }

      return (
            <header>
                {
                    // There is Name of website Left side
                }
                {isVariableTrue == true ? (
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
                    <input
                     type="text" 
                     placeholder='Search' 
                     className='Search'
                     value={searchTerm}
                     onChange={handleSearch}
                     />
                    <FaSearch className='IconSearch'/>
                </label>
                <br/><br/>
                {/* There is navigation menu */}
                {isVariableTrue ? (
                    <div className='nav'>                
                        {/* <label ><Link to='/Browse/MyProfile' className='myprof'><MdBookmarkBorder/></Link></label> */}
                        <label ><Link to='/Browse/mycarts' className='myCart'><BsFillCartFill/></Link></label>
                        <label className='signinlabel'><Link className='SignIn' to='/browse'><FaUserAlt/></Link></label>
                        <div className='hideLabels'>
                                <Link to='/Browse/MyProfile' className='profile'>
                                    &nbsp;<BsInfoSquareFill/>&ensp;Profile
                                </Link>
                            
                            <Link to='/'>
                                <label onClick={() => {sessionStorage.clear}} className='signOut'>
                                    &nbsp;<FaSignOutAlt/>&ensp;SignOut
                                </label>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className='nav'>                
                        {/* <label ><Link to='/' className='myProd'><MdBookmarkBorder/></Link></label> */}
                        <label ><Link to='/' className='myCart'><BsFillCartFill/></Link></label>
                        <label className='SignInUntill' ><Link className='SignInUntill' to='/'><FaUserAlt/></Link></label>
                        <div className='hideLabels'>
                            <label className='profile' onClick={() => {alert('Yor are not sign in So you go back in Welcome page and please sign in');}}>
                                    <Link to='/'>
                                        &nbsp;<BsInfoSquareFill/>&ensp;Profile
                                    </Link>
                            </label>
                            
                            <label className='signOut'>
                                <Link to='/'>
                                    &nbsp;<FaSignOutAlt/>&ensp;SignIn
                                </Link>
                            </label>
                        </div>
                    </div>
                )}

            </header>
  )
}

export default Header