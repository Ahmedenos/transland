import React from 'react'
import {BrowserRouter ,Routes ,Route} from "react-router-dom"
import Navbare from './components/Navbar/Navbar'
import Home from './components/home/Home'
// import Contact from './components/contact/Contact'
import Footer from './components/home/footer/Footer'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbare/>
      {/* <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes> */}
      <Home />
      <Footer/>
      </BrowserRouter>
     
    </div>
  )
}
