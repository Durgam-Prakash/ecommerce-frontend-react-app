import React from 'react'
import {kitchenData} from '../data/kitchen'
const Kitchen = () => {
      const fisrtFiveImages=kitchenData.slice(0,5)
  return (
    <>
    <h2>Kitchen</h2>
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

export default Kitchen