import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
           <div className="home__container">
               <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
               
               <div className="home__row">
                 <Product id="12312322" title='The lean startup' price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={3}/>
                 <Product id="11222233"  title='Galaxy Watch 3' price={199.99} image="https://cdn.shopify.com/s/files/1/0024/9803/5810/products/440608-Product-0-I-637320742268191559_800x800.jpg" rating={4}/>      
               </div>

               <div className="home__row">
                 <Product id="44122233"  title='Fossil Gen 5 Smartwatch' price={220.99} image="https://fossil.scene7.com/is/image/FossilPartners/FTW6035_main?$sfcc_fos_hi-res$" rating={5}/>
                 <Product id="33322211"  title='Iphone 12 Pro Max' price={999} image="https://www.optus.com.au/content/dam/optus/images/shop/mobile/phones/apple/iphone-12-pro-max/carousel/iphone-12-pro-max-pacific-blue-front-back.jpg/renditions/version-1604556939294/original.jpeg" rating={4}/> 
                 <Product id="44455566"  title='RDX Weightlifting Belt' price={49.99} image="https://canary.contestimg.wish.com/api/webimage/5a69f39bda6ce640dcd14d6e-large.jpg?cache_buster=df1d17302af528b1c16bbaeaa49eb38f" rating={5}/>     
               </div>

               <div className="home__row">
                 <Product  id="90829332" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" price={1094.98} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"/>
                 <Product  id="3254354345" title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" price={598.99} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"/>     
               </div>
           </div> 
        </div>
    );
}

export default Home;
