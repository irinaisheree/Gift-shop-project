import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('hero-area')).render(

  <BrowserRouter>
  <App />
</BrowserRouter>

)
