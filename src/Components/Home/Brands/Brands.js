import React from 'react';
import BrandsPicture from '../../../Photos/brands.png';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


const Brands = () => {
    return (
        <div className="container mt-5 mb-5">
            <Fade bottom>
            <h5 className="text-center mt-5">THE BRANDS WE DEALS IN</h5>
            </Fade>
            <Slide bottom>
            <img className="img-fluid mt-5" src={BrandsPicture} alt=""/>
            </Slide>
        </div>
    );
};

export default Brands;