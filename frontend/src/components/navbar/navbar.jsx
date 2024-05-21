import React, { useContext, useState } from 'react'
import "./navbar.css"
import {assets} from "../../assets/assets.js"
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/Storecontext.jsx'
const Navbar = ({setshowlogin}) => {
    const [menu, setmenu] = useState("home")
    const {getTotalCartAmount} = useContext(StoreContext)
 
    
  return (
    <div>
        <div className="navbar">
           <Link to="/"><img src={assets.logo} className='logo' alt="" /></Link> 
            <ul className="navbar-menu">
                <Link to="/" onClick={()=>setmenu("home")} className={menu =="home"? "active": ''} >home</Link>
                <a href='#explore-menu' onClick={()=>setmenu("menu")} className={menu =="menu"? "active": ''}  >menu</a>
                <a href="#app-download" onClick={()=>setmenu("mobile")} className={menu =="mobile"? "active": ''} >
                    mobile-app
                </a>
                <a href="#footer" onClick={()=>setmenu("contact")} className={menu =="contact"? "active": ''}>contact us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="narbar-search-icon">
                   <Link to="/cart"> <img src={assets.basket_icon} alt="" /></Link>
                  
                    <div className={getTotalCartAmount()===0 ?"":"dot"}>

                    </div>
                    
                </div>
                <button onClick={()=>setshowlogin(true)}>sign in</button>
            </div>
        </div>     
    </div>
  )
}

export default Navbar
