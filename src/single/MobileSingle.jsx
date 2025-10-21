import React from 'react'
import { mobileData } from '../stores/data/mobiles'
import { useParams } from 'react-router-dom'
import '../css/productsSingle.css'
import Navbar from '../stores/components/Navbar'
import { useCart } from '../stores/context/CartContext'

const MobileSingle = () => {

    const {id} = useParams()

const {addToCart,cartItems}=useCart()


    const product = mobileData.find((item)=> item.id===id)
  return (
    <>    
    <Navbar/>
    <div className='ind-page'>
        <div className="ind-img">
            <img src={product.image} alt="" srcset="" />
        </div>

        <div className="ind-details space">

            <div className="ind-company">
                <h1>{product.company}</h1>
            </div>
            <div className="ind-model">
            <h3>{product.model}</h3>
        </div>

        <div className="ind-price">
            <h2>{product.price}</h2>
        </div>

        <div className="ind-desc">
            <p>{product.description}</p>
        </div>

        <button onClick={()=>addToCart(product)} className='cart-btn'>Add to cart</button>
        </div>

    </div>
    </>

  )
}

export default MobileSingle