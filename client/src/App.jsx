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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Header/>
  <Slider/>
  <Shop/>
  <Saving/>
  <Gift/>
  <Footer/>
  </>
  )
}

export default App
