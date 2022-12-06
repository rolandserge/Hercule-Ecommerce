import React from 'react';
import "../Styles/Article.css"
import { AddCard } from '../Redux/SystemPanier';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom"

const Article = ({data , index}) => {

     const dispatch = useDispatch()

     const addcard = (produit) => {
          dispatch(AddCard(produit))
     }
     return (
                         <div className="card" key={index}>
                              <div className="image_card">
                                   <img src={data.image} alt="" />
                              </div>
                              <div className="infos_produits">
                                   <p>{data.nom}</p>
                                   <h3>{data.prix.toLocaleString()} FCFA</h3>
                                   <div className='button_action'>
                                        <Link to={`/detail-produit/${data.id}`} className="voirplus">Voir +</Link>
                                        <button onClick={() => addcard(data)}>Add card</button>
                                   </div>
                              </div>
                         </div> 
                    );
};

export default Article;