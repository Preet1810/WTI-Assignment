import { useState } from 'react'
import './App.css'
import './index.css'
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './componets/Navbar'
import Clients from './componets/Clients'
function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Clients />
      </BrowserRouter>
    </div>


  )
}

export default App
