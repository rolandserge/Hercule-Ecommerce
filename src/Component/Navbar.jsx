import React, { useState } from 'react';
import Logo from "../Assets/logohercule.png"
import { Link } from "react-router-dom"
import "../Styles/Navbar.css"
import ReactDOM from "react-dom";
import Register from '../Pages/Register';

const Navbar = ({modal}) => {
     
     return (
          <>   
          {/* {open ? <Register /> : */}
               <header className='navbar'>
                    <div className='header_div'>
                         <div className='header_div_logo'>
                              <img src={Logo} alt="Logo hercule" />
                         </div>
                         <div className='header_div_authentification'>
                              <Link to="/home">Home</Link>
                              <Link to="" onClick={() => modal(true)} className='login'>Se connecter</Link>
                              <Link to="" onClick={() => modal(true)} className='register'>S'inscrire</Link>
                         </div>
                    </div>
               </header>
          {/* } */}
          </>
     );
};

export default Navbar;