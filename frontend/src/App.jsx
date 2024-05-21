
import './App.css'
import Navbar from './components/navbar/navbar'
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/home/home.jsx"
import Cart from './pages/cart/Cart.jsx'
import Placeorder from './pages/placeorder/Placeorder.jsx'
import Footer from './components/footer/Footer.jsx'
import LoginPopUp from './components/loginPopup/LoginPopUp.jsx'
import { useState } from 'react'

function App() {
  const [showlogin, setshowlogin] = useState(false)

  return (
    <>
    {showlogin ? <LoginPopUp setshowlogin={setshowlogin}/>: <></>}
    <div className="app">
      <Navbar setshowlogin={setshowlogin}/>
      <Routes>
        <Route path="/" element={<Home/>}/>,
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/>
      </Routes>
      
    </div>
    <Footer/>
     
    </>
  )
}

export default App
