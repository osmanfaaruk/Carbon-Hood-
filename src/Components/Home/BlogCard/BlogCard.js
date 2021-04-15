import React from 'react';


const BlogCard = (props) => {
    const {author, authorImg, title, position} = props.blogs;
    return (
        <div className="col-md-4 text-center">
        <img style={{height: '250px'}} src={authorImg} alt="" />
        <h5 className="mt-3 mb-3">{author}</h5>
        <h6>{position}</h6>
        <p className="text-secondary">{title}</p>
        
    </div>
    );
};

export default BlogCard;