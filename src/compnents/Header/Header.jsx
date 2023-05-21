import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext'; 
import './Header.css';
import { FaSearch } from 'react-icons/fa';




const Header = () => {
    const { isSignedIn } = useContext(AuthContext);

    const handleMeoradebiClick = (e) => {
      if (!isSignedIn) {
        e.preventDefault();
      }
    };
  
      
  
    return (
      <header>
        <Link to="/browse">
          <label className="Name" onClick={handleMeoradebiClick}>
            MEORA
            <br />
            DEBI
          </label>
          <br />
        </Link>
  
        <label className="SearchLabel">
          <input type="text" placeholder="Search" className="Search" />
          {/* Search icon */}
        </label>
        <br />
        <br />
        <div className="nav">
          <label>
            <Link className="myCart">My Cart</Link>
          </label>
          <label>
            <Link to="/myProduct" className="myProd">
              My Products
            </Link>
          </label>
          <label>
          {isSignedIn ? (
            <Link className="SignIn" to="/" onClick={handleSignOut}>
              Sign Out
            </Link>
          ) : (
            <Link className="SignIn" to="/browse">
              Sign In
            </Link>
          )}
          </label>
        </div>
      </header>
    );
  };








// const Header = () => {
//     const { isSignedIn } = useContext(AuthContext);
  
//     return (
//       <header>
//         <Link to="/">
//           <label className="Name">
//             MEORA
//             <br />
//             DEBI
//           </label>
//           <br />
//         </Link>
  
//         <label className="SearchLabel">
//           <input type="text" placeholder="Search" className="Search" />
//           {/* Search icon */}
//         </label>
//         <br />
//         <br />
//         <div className="nav">
//           <label>
//             <Link className="myCart">My Cart</Link>
//           </label>
//           <label>
//             <Link to="/myProduct" className="myProd">
//               My Products
//             </Link>
//           </label>
//           {isSignedIn ? (
//             <label>
//               <Link to="/browse" className="meoradebi">
//                 Meoradebi
//               </Link>
//             </label>
//           ) : (
//             <label>
//               <Link to="/" className="SignIn">
//                 Sign In
//               </Link>
//             </label>
//           )}
//         </div>
//       </header>
//     );
//   };
  








// const Header = () => {
//   const { isSignedIn } = useContext(AuthContext);
//   const history = useNavigate();

//   const handleMeoradebiClick = () => {
//     if (isSignedIn) {
//       history.push('/browse');
//     }
//   };

//   return (
//     <header>
//       {/* Name of website */}
//       <Link to="/" onClick={handleMeoradebiClick}>
//         <label className="Name">
//           MEORA<br />DEBI
//         </label>
//         <br />
//       </Link>

//       {/* Search value */}
//       <label className="SearchLabel">
//         <input type="text" placeholder="Search" className="Search" />
//         <FaSearch className="IconSearch" />
//       </label>
//       <br />
//       {/* Navigation menu */}
//       <div className="nav">
//         <label>
//           <Link className="myCart">My Cart</Link>
//         </label>
//         <label>
//           <Link to="/myProduct" className="myProd">
//             My Products
//           </Link>
//         </label>
//         <label>
//           <Link
//             className="SignIn"
//             to={isSignedIn ? '/browse' : '/'}
//           >
//             {isSignedIn ? 'Browse' : 'Sign In'}
//           </Link>
//         </label>
//       </div>
//     </header>
//   );
// };

// export default Header;









// import React from 'react';
// import './Header.css';
// import { FaSearch } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import { AuthContext } from './AuthContext';

// const Header = () => {
//     const { isSignedIn } = useContext(AuthContext);
//     const history = useNavigate();
  
//     const handleMeoradebiClick = () => {
//       if (isSignedIn) {
//         history.push('/browse');
//       }
//     };
//   return (
//     <header>
//       <Link to="/" onClick={handleMeoradebiClick}>
//         <label className="Name">
//           MEORA<br />DEBI
//         </label>
//         <br />
//       </Link>

//       <label className="SearchLabel">
//         <input type="text" placeholder="Search" className="Search" />
//         <FaSearch className="IconSearch" />
//       </label>
//       <br />
//       <br />
//       <div className="nav">
//         <label>
//           <Link className="myCart">My Cart</Link>
//         </label>
//         <label>
//           <Link to="/myProduct" className="myProd">
//             My Products
//           </Link>
//         </label>
//         <label>
//           <Link className="SignIn" to="/">
//             Sign In
//           </Link>
//         </label>
//       </div>
//     </header>
//   );
// };

// export default Header;









// // import React from 'react'

// // import './Header.css'

// // import {FaSearch} from 'react-icons/fa';
// // import { Link, useNavigate } from 'react-router-dom';

// // const Header = () => {

// //     const navigate = useNavigate();

// //     const handleMeoraDebiClick = () => {
// //       navigate('/browse');
// //     };

// //   return (
// //             <header>
// //                 {
// //                     // There is Name of website Left side
// //                 }
// //                 <Link to="/" {handleMeoraDebiClick}>
// //                     <label className='Name'>
// //                         MEORA<br/>DEBI
// //                     </label>
// //                     <br/>
// //                 </Link>

// //                 {
// //                     // There is websites Search value
// //                 }
// //                 <label className='SearchLabel'>
// //                     <input type="text" placeholder='Search' className='Search'/>
// //                     <FaSearch className='IconSearch'/>
// //                 </label>
// //                 <br/><br/>
// //                 {/* There is navigation menu */}
// //                 <div className='nav'>                
// //                     <label ><Link className='myCart'>My Cart</Link></label>
// //                     <label ><Link to={"/myProduct"} className='myProd'>My Products</Link></label>
// //                     <label ><Link className='SignIn' to='/'>Sign In</Link></label>
            
// //                 </div>
// //             </header>
// //   )
// // }

export default Header