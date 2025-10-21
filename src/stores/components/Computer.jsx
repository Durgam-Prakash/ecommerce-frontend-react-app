import React from 'react'
import {computerData} from '../data/computers'
const Computer = () => {
   const fisrtFiveImages=computerData.slice(0,5)
  return (
    
    <>
    <h2>Computers</h2>
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

export default Computer