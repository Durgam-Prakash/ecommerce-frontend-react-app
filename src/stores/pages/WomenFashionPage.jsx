import React from 'react'
import { womanData } from '../data/woman'
import Navbar from '../components/Navbar'
const WomenFashionPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'> 
                    {womanData.map((item)=>{
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

export default WomenFashionPage