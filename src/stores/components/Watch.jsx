import React from 'react'
import {watchData} from'../data/watch'
const Watch = () => {

     const fisrtFiveImages=watchData.slice(0,5)
  return (
    <>
    <div className='proTitle'>
        <h2>Watch</h2>
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

export default Watch