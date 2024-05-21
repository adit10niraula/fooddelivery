
import './App.css'
import Navbar from './components/navbar/navbar'
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/home/home.jsx"
import Cart from './pages/cart/Cart.jsx'
import Placeorder from './pages/placeorder/Placeorder.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {

  return (
    <>
    <div className="app">
      <Navbar/>
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
