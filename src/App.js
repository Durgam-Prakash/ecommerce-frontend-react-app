import React from 'react'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes,Route } from 'react-router-dom';
import Kitchen from './stores/components/Kitchen';
import MobilePage from './stores/pages/MobilePage';
import ComputersPage from './stores/pages/ComputersPage';
import FurniturePage from './stores/pages/FurniturePage';
import MensFashionPage from './stores/pages/MensFashionPage';
import Watchespage from './stores/pages/Watchespage';
import WomenFashionPage from './stores/pages/WomenFashionPage';
import MobileSingle from './single/MobileSingle';
import UserCart from './stores/UserCart';
const App = () => {
  return (
    <div>
      <Routes>
       <Route path='/' element={<LandingPage/>}/>
       <Route path='/abc' element={<Kitchen/>}/>
        <Route path='/mobiles' element={<MobilePage/>}/>
         <Route path='/computers' element={<ComputersPage/>}/>
         <Route path='/furnitures' element={<FurniturePage/>}/>
         <Route path='/watches' element={<Watchespage/>}/>
         <Route path='/menfashion' element={<MensFashionPage/>}/>
         <Route path='/womenfashion' element={<WomenFashionPage/>}/>
         <Route path='/mobiles/:id' element={<MobileSingle/>}/>
  
   <Route path='/cart' element={<UserCart/>}/>
  
      </Routes>
 
    </div>
  )
}

export default App