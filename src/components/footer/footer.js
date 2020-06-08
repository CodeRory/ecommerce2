import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

import '../footer/footer.css';

export default function Footer() {
    return (
        <div className='footerContainer'>        
            <nav className='footer'>
                <nav className="socialMedia">
                    <a href="/#"><FacebookIcon /></a>
                    <a href="/#"><InstagramIcon /></a>
                    <a href="/#"><TwitterIcon /></a>
                </nav>

                <div className='codeRory' >
                    <p>©CodeRory</p>
                </div>
            </nav>
        </div>
    );

}