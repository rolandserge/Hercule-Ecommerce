import React from 'react';
import Navbar from '../Component/Navbar';
import { useParams } from 'react-router-dom'
import "../Styles/DetailProduit.css"
import Article from '../Component/Article';
import ReactImageMagnify from 'react-image-magnify';
import data from "../Datas/data.js"
import { AddCard } from '../Redux/SystemPanier';
import { useDispatch } from 'react-redux';

const DetailProduit = () => {

     const {id} = useParams()
     const dispatch = useDispatch()

     const details = (obj)  => {
       
          if (obj.id ==  id) {
               return true;
          } else {
            return false;
          }
     }
     const addcard = (produit) => {
          dispatch(AddCard(produit))
     }
     const detail = data.filter(details)

     return (
          <div>
               <Navbar />
               <center>
                    <div className='titre_produit'>
                         <h2>{detail[0].nom}</h2>
                    </div>
               </center>    
               <center>
                    <div className='detail_class'>
                         <div className='detail_class_img'>
                              {/* <img src={Jordan} alt="" /> */}
                              <ReactImageMagnify className='img'{...{
                                   smallImage: {
                                        alt: detail[0].nom,
                                        // isFluidWidth: true,
                                        src: detail[0].image,
                                        height : 330,
                                        width : 400,
                                   },
                                   largeImage: {
                                        src: detail[0].image,
                                        width: 1200,
                                        height: 1800
                                   }
                                   }} />
                         </div>
                         <div className='detail_class_infos'>
                              <div className='description'>
                                   <span className='description_span'>Description</span>
                                   <p>
                                        {detail[0].description}
                                   </p>
                              </div>
                              <div>
                                   <h2>{detail[0].prix.toLocaleString()} FCFA</h2>
                              </div>
                              <div className='option'>
                                   <p>Option disponible</p>
                                   <div className='option_button'>
                                        <button className='active'>PT 21</button>
                                        <button>PT 49</button>
                                        <button>PT 39</button>
                                        <button>PT 38</button>
                                        <button>PT 45</button>
                                   </div>
                              </div>
                              <div className='add_button'>
                                   <button onClick={() => addcard(detail[0])}>Ajouter au panier</button>
                              </div>
                         </div>
                    </div>
               </center>
               <div className='cards'>
               {
                    data.map((produit, index) => {
                         return (
                                                       
                              <Article data={produit} key={index} />
                         )
                    }) 
               }
               </div>
          </div>
     );
};

export default DetailProduit;