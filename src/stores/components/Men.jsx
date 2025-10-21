import React from 'react'
import {menData} from '../data/men'
const Men = () => {
    const fisrtFiveImages=menData.slice(0,5)
  return (
    <>
    <div className='proTitle'>

    <h2 >Men</h2>
    </div>
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

export default Men