import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import messi1 from '../../Assets/M1.jpg';
import team from '../../Assets/team.jpg';
import dinho from '../../Assets/dinho.png';

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
                <img src={dinho} alt="ronaldinho"/>
            </div>
        </Carousel>
    );
}

export default Banner;
