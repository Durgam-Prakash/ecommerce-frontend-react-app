import React from 'react'
import Navbar from '../components/Navbar'
import { menData } from '../data/men'

const MensFashionPage = () => {
  return (
    <>
    <Navbar/>
     <div className='pageSection'> 
            {menData.map((item)=>{
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

export default MensFashionPage