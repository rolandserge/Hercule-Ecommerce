import React, {useEffect} from 'react';
import Navbar from '../Component/Navbar';
import { Link} from "react-router-dom"
import "../Styles/Panier.css"
import { useDispatch, useSelector } from 'react-redux';
import { clearCard, decrement, getTotals, increment, remove } from '../Redux/SystemPanier';

const Panier = () => {

     const {cards, totalAmont} = useSelector(item => item.panier)
     const dispatch = useDispatch()
    
     useEffect(() => {

          dispatch(getTotals())

     }, [cards, dispatch])

     return (
          <div>
               <Navbar />
               <div>
                    {
                         cards.length >= 1 ?
                         <>
                              <div className='panier_recap'>
                                   <p>Recaputilatif de mon panier</p>
                              </div>
                              <center>
                                   <div className="paniers">
                                        <div className="listes_paniers">
                                        {
                                             cards.map((card, index) => {
                                                  return (

                                                       
                                                  <div className='panier_div' key={index}>
                                                       <div className="image_panier">
                                                            <img src={card.image} alt="" />
                                                       </div>
                                                       <div className='panier_nom_produit'>
                                                            <p>{card.nom}</p>
                                                            <p>Taille : PT 40</p>
                                                            <button onClick={() => dispatch(remove(card))}>Supprimer</button>
                                                       </div>
                                                       <div className='panier_action_button'>
                                                            <div>
                                                                 <p>{card.prix.toLocaleString()} FCFA</p>
                                                            </div>
                                                            <div className='qtn'>
                                                                 <button onClick={() => dispatch(decrement(card))}>-</button>
                                                                 <p>{card.quantite}</p>
                                                                 <button onClick={() => dispatch(increment(card))}>+</button>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  )
                                             })
                                        }
                                        <div className='panier_button'>
                                             <Link className='link_home' to="/home">continuer vos achats</Link>
                                             <button onClick={() => dispatch(clearCard())}>Vider le panier</button>
                                        </div>
                                        </div>
                                        <div className="bilan_panier">
                                             <div>
                                                  <h3>Sous total</h3>
                                                  <p>{totalAmont.toLocaleString()} FCFA</p>
                                             </div>
                                             <div>
                                                  <h3>Expedition</h3>
                                                  <p>
                                                       Les frais de livraison sont payés apres la livraison
                                                  </p>
                                             </div>
                                             <div>
                                                  <h3>Total</h3>
                                                  <p>{totalAmont.toLocaleString()} FCFA</p>
                                             </div>
                                             <div>
                                                  <Link className='commander'>Commander</Link>
                                             </div>
                                        </div>
                                   </div>
                              </center>
                         </> : <di>
                                   Votre panier est vide
                         </di>
                    }
               </div>
          </div>
     );
};

export default Panier;