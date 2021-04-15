import React from 'react';

const VehicleTypes = (props) => {
    const {name, img, details} = props.vehicles;
    return (
        <div className="col-md-4 text-center">
        <img style={{height: '70px'}} src={img} alt="" />
        <h5 className="mt-3 mb-3">{name}</h5>
        <p className="text-secondary">{details}</p>
        </div>
    );
};

export default VehicleTypes;