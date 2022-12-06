import React from 'react';

const Login = ({modal}) => {

     return (

      <div className='body_register'>
          <div className="formulaire">
               <form action="" method='post'>
                    <div>
                         <label htmlFor="">Entrer votre e-mail</label>
                         <input type="email" name="" />
                    </div>
                    <div>
                         <label htmlFor="">Entrer votre mot de passe</label>
                         <input type="password" name="" />
                    </div>
                    <div className='button_register'>
                         <button>Se connecter</button>
                    </div>
                    <div className='retour_register'>
                         <p onClick={() => modal(false)}>Retour</p>
                         <Link to="" className='login_register'>S'inscrire</Link>
                    </div>
               </form>
          </div>
     </div>
     );
};

export default Login;