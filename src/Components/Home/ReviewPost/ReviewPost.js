import React from 'react';

const ReviewPost = (props) => {

    const {name, review, status ,img} = props.reviews;
    return (
        <div className="col-md-4 text-center">
        
        <p>"{review}"</p>
        <img style={{height: '50px'}} src={img} alt="" />
        <h5 className="mt-3">{name}</h5>
        <p>{status}</p>
    </div>
    );
};

export default ReviewPost;