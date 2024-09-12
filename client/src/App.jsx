import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Slider from './components/slider/Slider'
import Shop from './components/shop-section/ShopSection'
import Gift from './components/gift-section/GiftSection'
import Saving from './components/saving-section/SavingSection'

import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import Register from './components/register/Register'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/register" element={<Register />} />
    </Routes>
    <Footer/>
  </>
  )
}

export default App
