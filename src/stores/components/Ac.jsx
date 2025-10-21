import React from 'react'
import {acData} from '../data/ac'
const Ac = () => {
     const fisrtFiveImages=acData.slice(0,5)
  return (
    <>
   <div className='proTitle'>
     <h2>AC</h2>
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

export default Ac