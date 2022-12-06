import React, { useState } from 'react';
import Article from '../Component/Article';
import Header from '../Component/Header';
import Navbar from '../Component/Navbar';
import "../Styles/Home.css"
import Register from './Register';
import data from "../Datas/data.js"

const Home = () => {
     const [open, setOpen] = useState(false)

     const chaussure = (obj)  => {
        
          if (obj.categorie ===  "Chaussure") {
               return true;
          } else {
            return false;
          }
        }
     const culotte = (obj)  => {
        
          if (obj.categorie === "Culotte") {
               return true;
          } else {
            return false;
          }
        }
   
     return (
          <>
          {open ? <Register modal={setOpen} /> :
               <div>
               <>
                    <Navbar modal={setOpen} />
               </>
               <main>
                         <section>
                              <header>
                                   <Header />
                              </header>
                         </section>
                         <section>
                              <article>
                                   <div className='article'>   
                                        <div className='categorie'>
                                             <h3>Chaussure</h3>
                                        </div>
                                        <div className='cards'>

                                             {
                                                  data.filter(chaussure).map((produit, index) => {
                                                       return (
                                                       
                                                            <Article data={produit} key={index} />
                                                       )
                                                  }) 
                                             }

                                        </div>
                                   </div>
                                   <div className='article'>   
                                        <div className='categorie'>
                                             <h3>Culotte</h3>
                                        </div>
                                        <div className='cards'>

                                             {
                                                  data.filter(culotte).map((produit, index) => {
                                                       return (
                                                       
                                                            <Article data={produit} key={index} />
                                                       )
                                                  }) 
                                             }

                                        </div>
                                   </div>
                              </article>
                         </section>
               </main>
               <footer>

               </footer>
               </div>
          }
     </>
     );
};

export default Home;