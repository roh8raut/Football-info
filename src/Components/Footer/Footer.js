import React from 'react';
import './Footer.css';
import LM from '../../Assets/Leo.jpg'; 
import fb from '../../Assets/facebook.svg';
import ln from '../../Assets/linkedin.svg';
import insta from '../../Assets/instagram.svg'

const Footer = () => {
    return (
    <div className="footer">
        <img className="messiFace" src={LM} alt="messi" />
       
        <a href="https://www.facebook.com/rohit.raut.731"><img src={fb} alt="fb" className="logos logos--fb"/></a>
        <a href="https://www.instagram.com/roh8raut/"><img src={insta} alt="instagram" className="logos logos--insta"/></a> 
        <a href="https://www.linkedin.com/in/rohitraut1996"><img src={ln} alt="linkedin" className="logos logos--ln"/></a> 
        <div className="copyright">
            <p style={{"fontSize": "10px"}}>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a></p>
            <p> © 2018 Football Club. All Rights Reserved | Design by roh8raut</p>
        </div>
    </div>
    )
}

export default Footer;