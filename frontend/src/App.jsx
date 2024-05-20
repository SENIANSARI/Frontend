import React, { useState } from 'react'
import Nav from './components/navbar/Nav'
import {assets} from "./assets/assets";
import {Route,Routes} from "react-router-dom"
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';

const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Nav setShowLogin={setShowLogin}/>
      <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/" element ={<Cart/>}/>
      <Route path="/" element ={<PlaceOrder/>}/>
        
      </Routes>
      
    </div>
    <Footer/>
    </>
  )
}

export default App
