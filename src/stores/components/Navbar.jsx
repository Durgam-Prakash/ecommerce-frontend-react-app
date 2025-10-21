import React from 'react'

import'../../css/navbar.css'
import { FaUser, FaShoppingCart, FaPhone } from 'react-icons/fa';

const Navbar
 = () => {
  return (
    <>    <div className='nav-section'>
       <div className='title'>
        <h2>E-Mart</h2>
       </div>
       <div className='search'>
        <input type="text" placeholder='search....' />
       </div>
       <div className='user'>
        <div className='userdetail'>SignUp/Login</div>
        <div className='cart'>Cart</div>
       </div>
    </div>


    <div className='subMenu'>
      <ul>
        <li>Mobiles</li>
         <li>Computers</li>
          <li>Watches</li>
           <li>Men Fashion</li>
            <li>Women Dressing</li>
             <li>Frunitures</li>
              <li>AC</li>
               <li>Kitchen</li>
               <li>Tv</li>
               <li>Speakers</li>
               <li>Fridge</li>
               <li>Books</li>
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
