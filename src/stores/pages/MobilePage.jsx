import React from 'react'
import { mobileData } from '../data/mobiles'
import '../../css/products.css'
import Navbar from '../components/Navbar'
const MobilePage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'> 
        {mobileData.map((item)=>{
            return(
                <div>
                    <div className="pageImg">
                        <img src={item.image} alt="" srcset="" />
                    </div>
                    <div className="proModel">
                        {item.company},{item.model}
                    </div>
                </div>
            )
        })}


        
    </div>
    </>
  )
}

export default MobilePage