import React from 'react';
import BrandsPicture from '../../../Photos/brands.png';
import Slide from 'react-reveal/Slide';

const Brands = () => {
    return (
        <div className="container mt-5 mb-5">
            <Slide left>
            <h5 className="text-center mt-5">THE BRANDS WE DEALS IN</h5>
            </Slide>
            <Slide bottom>
            <img className="img-fluid mt-5" src={BrandsPicture} alt=""/>
            </Slide>
        </div>
    );
};

export default Brands;