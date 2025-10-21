import React from 'react'

import {womanData} from '../data/woman'
const Women = () => {
      const fisrtFiveImages=womanData.slice(0,5)
  return (
    
   <>
  <div className='proTitle'>
      <h2>women</h2>
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

export default Women