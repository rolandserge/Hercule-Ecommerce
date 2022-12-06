import React from 'react';
import "../Styles/Register.css"
import { Link } from "react-router-dom"

const Register = ({modal}) => {
     return (
          <div className='body_register'>
               <div className="formulaire">
                    <form action="" method='post'>
                         <div>
                              <label htmlFor="">Entrer votre nom et prenom</label>
                              <input type="text" name="" />
                         </div>
                         <div>
                              <label htmlFor="">Entrer votre e-mail</label>
                              <input type="email" name="" />
                         </div>
                         <div>
                              <label htmlFor="">Entrer votre mot de passe</label>
                              <input type="password" name="" />
                         </div>
                         <div className='button_register'>
                              <button>S'inscrire</button>
                         </div>
                         <div className='retour_register'>
                              <p onClick={() => modal(false)}>Retour</p>
                              <Link to="" className='login_register'>Se connecter</Link>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default Register;