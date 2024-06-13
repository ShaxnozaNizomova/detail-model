import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import Footer from './components/footer/Footer'
function App() {
  return (
    <div>
      <Navbar/>
     <Products/>
     <Footer/>
    </div>
  )
}

export default App
