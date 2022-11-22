import React from 'react'
import Logo from './images/logo.png';
import Sec_Logo from './images/logo2.png';

const Navbar = () => {
  return (
    <div className="topnav">
    <img src={Logo} className="top-left-logo"/>
   <div className="search-container">
  
     <form action="/action_page.php">
      
       <input type="text" placeholder="Search.." name="search"/>
       <button type="submit"><img src="https://img.icons8.com/material-outlined/24/null/search--v1.png"/ ></button>
     </form>
   </div>
   <img src={Sec_Logo} className="top-right-logo"/>
 </div>
  )
}

export default Navbar