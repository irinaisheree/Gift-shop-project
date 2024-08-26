import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Slider from './components/slider/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Header/>
  <Slider/>
  <Footer/>
  </>
  )
}

export default App
