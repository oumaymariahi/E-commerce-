import React from 'react';
import NewsLetter from '../components/NewsLetter/NewsLetter';
import Hero from '../components/Hero/Hero';
import Popular from '../components/Popular/Popular';
import NewCollection from '../components/NewCollection/NewCollection';
import Offers from '../components/Offers/Offers';



function Shop(){
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollection/>
            <NewsLetter/>


        </div>
    )
}
export default Shop;