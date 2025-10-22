import React from 'react'

import'../../css/navbar.css'
import {Link} from 'react-router-dom'
import { useCart } from '../context/CartContext'
//import { FaUser, FaShoppingCart, FaPhone } from 'react-icons/fa';

const Navbar
 = () => {

const {cartItems}=useCart()



  return (
    <>  
      {/* <div className='nav-section'>
       <div className='title'>
        <h2>E-Mart</h2>
       </div>
       <div className='search'>
        <input type="text" placeholder='search....' />
       </div>
       <div className='user'>
        <div className='userdetail'>SignUp/Login</div>
        <Link to='/cart'>
        <div className='cart'>Cart <span>{cartItems.length}</span></div>
        </Link>
       </div>
    </div> */}



     <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <div className="container-fluid">
        {/* Brand / Title */}
        <Link className="navbar-brand" to="/">
          <h1 className="m-0">Shopizo</h1>
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Centered Search Bar */}
          <form className="d-flex mx-auto my-2 my-lg-0" style={{ maxWidth: '500px', width: '100%' }}>
            <input
            id="bgm"
              className="form-control me-2"
              type="search"
              placeholder="Search for Products and Brands More"
              aria-label="Search"
            />
          </form>

          {/* User Options */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/login">SignUp/Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link position-relative" to="/cart">
                Cart
                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                  {cartItems.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>


    <div className='subMenu'>
      <ul>
        <Link to='/mobiles'> <li> <img src="assets/one.jpg" alt="" srcset=""   /> Mobiles</li></Link>
      
        <Link to='/computers'> <li> <img src="assets/laptop.jpg" alt="" srcset=""   />Computers</li></Link>
        <Link to='/furnitures'>  <li> <img src="assets/furniture.jpg" alt="" srcset=""   /> Frunitures</li></Link>
         <Link to='/watches'> <li>  <img src="assets/laptop.jpg" alt="" srcset=""   />Watches</li></Link>
          <Link to='/menfashion'> <img src="assets/fasion.jpg" alt="" srcset=""   /> <li>Men Fashion</li></Link>
          <Link to='/womenfashion'><img src="assets/fasion.jpg" alt="" srcset=""   /> <li>Women Dressing</li></Link>
            
             <Link to='/'><img src="assets/kitchen.jpg" alt="" srcset=""   />    <li>AC</li></Link>
            
              
                <Link to='/'><img src="assets/kitchen.jpg" alt="" srcset=""   />  <li>Home & Kitchen</li></Link>

           <Link to='/'><img src="assets/tv.jpg" alt="" srcset=""   />     <li>Tv</li> </Link>
           <Link to='/'><img src="assets/tv.jpg" alt="" srcset=""   />       <li>Speakers</li> </Link>
            <Link to='/'><img src="assets/tv.jpg" alt="" srcset=""   />      <li>Fridge</li> </Link>
              <Link to='/'><img src="assets/tv.jpg" alt="" srcset=""   />     <li>Books</li></Link>
             
               {/* <li>Fridge</li>
               <li>Books</li> */}
      </ul>
    </div>
    </>



//    <nav className="navbar navbar-expand-lg sticky-top custom-navbar shadow">
//   <div className="container">
//     <a className="navbar-brand fw-bold fs-3" href="#">
//       E-Mart
//     </a>
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbarContent"
//       aria-controls="navbarContent"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon"></span>
//     </button>

//     <div className="collapse navbar-collapse" id="navbarContent">
//       <form className="d-flex mx-auto my-2 my-lg-0 custom-search-form" role="search">
//         <input
//           className="form-control rounded-pill"
//           type="search"
//           placeholder="Search..."
//           aria-label="Search"
//         />
//       </form>

//       <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-3">
//         <li className="nav-item">
//           <a className="nav-link d-flex align-items-center gap-2" href="#" aria-label="Sign Up or Login">
//             <FaUser size={20} /> SignUp/Login
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link d-flex align-items-center gap-2" href="#" aria-label="Cart">
//             <FaShoppingCart size={20} /> Cart
//           </a>
//         </li>

//          <li className="nav-item">
//           <a className="nav-link d-flex align-items-center gap-2" href="#" aria-label="Cart">
//             <FaPhone size={20} /> Contact
//           </a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>

  )
}

export default Navbar
