import React from 'react'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes,Route } from 'react-router-dom';
import Kitchen from './stores/components/Kitchen';
import MobilePage from './stores/pages/MobilePage';
const App = () => {
  return (
    <div>
      <Routes>
       <Route path='/' element={<LandingPage/>}/>
       <Route path='/abc' element={<Kitchen/>}/>
        <Route path='/mobiles' element={<MobilePage/>}/>
  
      </Routes>
 
    </div>
  )
}

export default App