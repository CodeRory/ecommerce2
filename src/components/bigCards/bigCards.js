import React from 'react';
import city1 from '../bigCards/city1.png';
import city2 from '../bigCards/city2.png';

import concert from '../bigCards/concert.png';

import '../bigCards/bigCards.css';


export default function BigCards() {
    return (
        <div className='allBigCardsSection'>
            <div className='twoBigCards'>

                <img src={city1} alt='/#' id='firstBigPic'></img>
                <img src={city2} alt='/#' id='secondBigPic'></img>
            
            
            </div>

            <div className='oneBigCard'>
                <img src={concert} alt='/#' id='theBigPic'></img>
            
            </div>




              
           
        
        
        </div>



    );


}
