import React from 'react';
import '../bigCards/bigCards.css';


export default function BigCards() {
    return (

        <main className="sections">
            <div className='twoBigCards'>
                
                <a href='/#' className="firstBigPic">
                  <div className='textContainer'>
                    <h2 className="titleBigOne">Lorem Ipsum 1</h2>
                    <p className="subBigOne">Aenean velit felis, interdum tristique odio eget, tempor convallis felis. Phasellus et dui purus. Donec vulputate orci sed purus venenatis, a finibus eros tristique.</p>
                  </div>
                    </a>
                    
                <a href='/#' className="secondBigPic">
                    <div className='textContainer'>
                    <h2 className="titleBigOne">Lorem Ipsum 2</h2>
                    <p className="subBigOne">Proin odio neque, mattis eu augue eu, lacinia lacinia augue. Aliquam euismod nibh quis purus euismod bibendum. Proin eleifend ipsum at augue scelerisque, eget malesuada lacus varius. </p>
                    </div>
                </a>

            </div>   
            
            <a href='/#' className='oneBigCard'>                
                <div className="theBigPic">
                    <div className='textContainer'>
                    <h2 className="titleBigOne">Lorem Ipsum 3</h2>
                    <p className="subBigOne">Pellentesque sit amet luctus sem, sit amet mollis libero. Fusce in maximus lacus. Etiam nulla mi, accumsan vel luctus eu, iaculis ut diam. Praesent mollis sollicitudin rhoncus. Ut dictum elit nec elit facilisis ornare. Donec vulputate orci sed purus venenatis, a finibus eros tristique.</p></div>
                </div>
            </a>
           
        </main>
    );

}



