// import React from 'react'
// import { useCart } from './context/CartContext'
// import Navbar from './components/Navbar'
// import '../css/cart.css'

// const UserCart = () => {

//     const{cartItems,addToCart,removeFromCart}=useCart()


//   return (
//     // <div>
//     //     {cartItems.map((item)=>{
//     //         return(
//     //             <div className='cart-section'>
//     //                 <div className="cart-img">
//     //                     <img src={item.image} alt="" srcset="" />
//     //                 </div>

//     //                 <div className='cart-details'>
//     //                     <h3>{item.product}</h3>
//     //                 </div>

//     //                 <h2 className='cart'>
//     //                     {item.price}

//     //                 </h2>
//     //                 <h3>{item.model}</h3>

//     //                 </div>
//     //         )
//     //     })}
//     // </div>

//     <>
// <Navbar />
// <div className='container'>
//     <h2 className='y-cart'>Your Cart</h2>
//  {cartItems.length ===0 ?
//     (<p className='empty'>Your Cart is Empty</p>):
//    <div>
//      {cartItems.map((item)=>{
//         return(
//             <div className='cart-section'>
//                 <div className="cart-img">
//                     <img src={item.image} alt="" />
//                 </div>
//                 <div className="cart-details">
//                     <h3>{item.product}</h3>
//                     <h2>
//                         {item.price}
//                     </h2>
//                     <h3>{item.model}</h3>
//                 </div>
//                 <button className='removeBtn' onClick={() => removeFromCart(item)}>Remove</button>
//             </div>
//         )
//     })}
//    </div>

// }
     
//     </div>
// </>
//   )
// }

// export default UserCart


import React from 'react';
import { useCart } from './context/CartContext';
import Navbar from './components/Navbar';
import '../css/cart.css'
import Footer from './components/Footer';

const UserCart = () => {
  const { cartItems, incrementQuantity, decrementQuantity, removeFromCart } = useCart();

  return (
    <>
      <Navbar />
      <div className='container'>
        <h2 className='y-cart'>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className='empty'>Your Cart is Empty</p>
        ) : (
          <div>
            {cartItems.map(item => (
              <div key={item.id} className='cart-section'>
                <div className="cart-img">
                  <img src={item.image} alt={item.product} />
                </div>
                <div className="cart-details">
                  <h3>{item.product}</h3>
                 <h2>${item.price * item.quantity}</h2> 
                  <h3>{item.model}</h3>
                  



                  <div className='quantity-controls'>
                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                  </div>
                </div>
                <button className='removeBtn' onClick={() => removeFromCart(item)}>Remove from Cart</button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default UserCart;
