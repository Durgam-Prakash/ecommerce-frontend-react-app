import React from 'react'
import {mobileData} from '../data/mobiles'
import'../../css/mobile.css'

const Mobile = () => {

    const fisrtFiveImages=mobileData.slice(0,5)
  return (
    <>
   <div className='proTitle'>
     <h2>Mobiles</h2>
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

export default Mobile