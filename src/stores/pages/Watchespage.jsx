import React from 'react'
import Navbar from '../components/Navbar'
import { watchData } from '../data/watch'

const Watchespage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'> 
                {watchData.map((item)=>{
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

export default Watchespage