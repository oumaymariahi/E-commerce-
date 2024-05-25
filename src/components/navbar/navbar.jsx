import React from "react";
import './navbar.css';
import {useState} from "react"
import search from '../../assets/search.png';
import cart from '../../assets/cart.png';
import logo from '../../assets/logoBeauty.jpg';
import Link from 'react-router-dom'

function Navbar() {
    const[menu,setMenu]=useState("shop");

    return(
        <div className="navbar">
           <div className="logo">
             <img src={logo} alt="logo" width="60px" height="60px"/>
           </div>
          <div className="search-bar">
               <img src={search} alt="search" height="16px" width="16px"/>
               <input type="text" placeholder="Recherche" border="none"/>
            
  
          </div>
  
        <ul className="nav-list">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration : 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("maquillage")}}><Link style={{textDecoration : 'none'}} to='/maquillage'>Maquillage</Link>{menu==="maquillage"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("parfum")}}><Link style={{textDecoration : 'none'}} to ='/parfum'>Parfum</Link>{menu==="parfum"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("soinVisage")}}><Link style={{textDecoration : 'none'}} to='/soinVisage'>Soin Visage</Link>{menu==="soinVisage"?<hr/>:<></>}</li>
        </ul>
        <div className="navLogin">
            <Link to ='/login'><button className="navLoginBtn">Login</button></Link>
            <Link to='/cart'><img className="cart" src={cart} alt="cart" height="25px" width="25px"/></Link>
            <div className="counter">0</div>
  
        </div>
        
  
         
          
      </div>
  
         
  
      )
  }
  
  export default Navbar;