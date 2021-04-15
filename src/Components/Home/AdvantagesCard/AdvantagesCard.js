import React from 'react';

const AdvantagesCard = ({advantages}) => {
    return (
        <div className="col-md-4 text-center">
        <img style={{height: '50px'}} src={advantages.img} alt="" />
        <h5 className="mt-3 mb-3">{advantages.name}</h5>
        <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
    </div>
    );
};

export default AdvantagesCard;