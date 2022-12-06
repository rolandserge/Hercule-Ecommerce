import React, { useState } from 'react';
import "../Styles/Acceuil.css"
import Jeu from "../Assets/basketball.gif"
import {Link} from "react-router-dom"

const Acceuil = () => {

     return (
          <div className='body'>
               <div className='logo'>
                    <h1>Logo</h1>
               </div>
               <div className='content_acceuil'>
                    <div className='content_acceuil_infos'>
                         <div className='acceuil_infos'>
                              <h1>Lorem ipsum dolor, sit amet consecte</h1>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt</p>
                         </div>
                         <div>
                              <Link to="/home" className='commencer'>Commencer vos achats</Link>
                         </div>
                    </div>
                    <div className='content_acceuil_jeu'>
                         <div className='image_giff'>
                              <img src={Jeu} alt="" />
                         </div>
                         <div className='jouer_button'>
                              <button>Jouer</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Acceuil;