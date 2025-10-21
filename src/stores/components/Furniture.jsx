import React from 'react'
import {furnitureData} from '../data/furniture'
const Furniture = () => {
     const fisrtFiveImages=furnitureData.slice(0,5)
  return (
    <>
    <h2>Furniture</h2>
    <div className='proSection'>

        {

            fisrtFiveImages.map((item)=>{
                return(
                    <div className='imgBox'>
                       <img className='proImg' src={item.image} alt="" srcset="" />
                   </div>
                )

            })
        }
    </div>
    </>
  )
}

export default Furniture