
import s1 from '../images/s1.png'
import s2 from '../images/s2.png'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Swiper from 'react-id-swiper';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
    export default class Slides extends Component {
      render() {
        return (

            <Carousel showArrows={true} showStatus={false} infiniteLoop={true} showThumbs={false} autoPlay={true} width={'1000'}>
                <div>
                    <img src={s1} />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src={s2} />
                    <p className="legend"></p>
                </div>

            </Carousel>
        );
      }
    }
