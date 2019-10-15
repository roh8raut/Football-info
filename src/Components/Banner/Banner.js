import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import messi1 from '../../Assets/M1.jpg';
import team from '../../Assets/team2.jpg';
import stadium from '../../Assets/stadium.webp'
import dinho from '../../Assets/dinho.webp';
import iniesta from '../../Assets/iniesta.webp'

const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true}>
            <div>
                <img src={messi1} alt="Messi"/>
            </div>
            <div>
                <img src={team} alt="team"/>
            </div>
            <div>
                <img src={stadium} alt="stadium"/>
            </div>
            <div>
                <img src={dinho} alt="ronaldinho"/>
            </div>
            <div>
                <img src={iniesta} alt="iniesta"/>
            </div>
        </Carousel>
    );
}

export default Banner;
