import React from 'react';

import '../description/description.css';

const Description = () => {
  return (
    <div className='allDescriptionArea'>  
        <div className='twoDescription'>    
            <div body className='oneDescriptionOfTwo' id='firstOne'>
                <h2 >
                    Music Ipsum
                </h2>
                    <div style={{textAlign: 'justify', marginRight: '3%'}}>
                    Mauris nec ante erat. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed non tellus et tellus sagittis laoreet rutrum sollicitudin leo.
                    </div>
                    
                </div>
                <div  className='oneDescriptionOfTwo' id='secondOne'>
                    <h2 >
                    Trust us
                    </h2>
                    <div style={{textAlign: 'justify'}}>
                    Sed id tempus justo, id vehicula dui. Suspendisse pulvinar euismod lacus, quis tempus tellus. 
                    Praesent sed faucibus libero, eget vestibulum justo. 
                    </div>
                </div>
        </div>

        <div className='oneVerticalDescription'>      
            <div >
                <h2 >
                Best music shopping experience
                </h2> 
                <div style={{textAlign: 'justify'}}>
                Phasellus tempus, purus sit amet eleifend condimentum, nunc est tempus dui, quis accumsan nibh turpis sit amet velit. 
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean quis scelerisque enim. 
                In venenatis enim eget elementum bibendum. Sed mattis dapibus elit, auctor eleifend est viverra sit amet.
                Maecenas eget leo porttitor, feugiat eros vel, lacinia nibh. 
                </div>
            </div>
      </div>
    </div>
    
  );
};

export default Description;