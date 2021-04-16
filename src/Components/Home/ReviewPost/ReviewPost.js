import React from 'react';

const ReviewPost = (props) => {

    const {name, companyName, description} = props.reviews;
    return (
        <div className="col-md-4 text-center mb-5">
        
        <p>"{description}"</p>
        <h5 className="mt-3">{name}</h5>
        <p>{companyName}</p>
    </div>
    );
};

export default ReviewPost;