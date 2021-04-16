import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = (props) => {

    const {serviceName, serviceDetails, serviceCost, imageURL, _id} = props.services;
    return (
        <div className="col-md-4 text-center">
        <img style={{height: '120px'}} src={imageURL} alt="" />
        <h5 className="mt-3 mb-3">{serviceName}</h5>
        <p className="text-secondary">{serviceDetails}</p>
        <p>${serviceCost}</p>
        <Link to={`/checkout/${_id}`}> <button className="btn btn-outline-primary mb-5">Book {serviceName}</button> </Link>
    </div>
    );
};

export default ServicesCard;