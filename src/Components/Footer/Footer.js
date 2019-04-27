import React from 'react';
import './Footer.css';
import LM from '../../Assets/Leo.jpg'; 

const Footer = () => {
    return (
    <div className="footer">
        <img className="messiFace" src={LM} alt="messi" />
         <p className="copyright"> © 2018 Football Club. All Rights Reserved | Design by roh8raut</p>
        <div className="icons">
            <a href="https://www.facebook.com/rohit.raut.731"><span className="fa fa-facebook logos"></span></a>
            <a href="https://www.instagram.com/roh8raut/"><span className="fa fa-instagram logos"></span></a>
            <a href="https://www.linkedin.com/in/rohitraut1996"><span className="fa fa-linkedin logos"></span></a>
        </div>
           
            
    </div>
    )
}

export default Footer;