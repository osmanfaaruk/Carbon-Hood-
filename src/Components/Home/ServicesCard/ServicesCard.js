import React from 'react';

const ServicesCard = (props) => {

    const {name, img, details} = props.services;
    return (
        <div className="col-md-4 text-center">
        <img style={{height: '120px'}} src={img} alt="" />
        <h5 className="mt-3 mb-3">{name}</h5>
        <p className="text-secondary">{details}</p>
        <button className="btn btn-outline-primary mb-5">Book {name}</button>
    </div>
    );
};

export default ServicesCard;