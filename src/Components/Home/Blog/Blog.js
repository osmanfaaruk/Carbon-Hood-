import React from 'react';
import Engineer2 from '../../../Photos/enginner2.png';
import SalesManager from '../../../Photos/Sales Manager.png';
import Director from '../../../Photos/Director.png';
import BlogCard from '../BlogCard/BlogCard';
import Slide from 'react-reveal/Slide';

const blogData = [
    {
        author:'Leffert L. Buck',
        authorImg : Engineer2,
        title : 'The best car safety device is a rear-view mirror with a cop in it',
        position:'Engineer',
    
    },
    {
        author:'Alfred Burges',
        authorImg : SalesManager,
        title : 'You have to wait six months to purchase a fuel efficient automobile made from overseas',
        position:'Sales Manager',
    },
    {
        author:'John Burland',
        authorImg : Director,
        title : "My opinion is it's a bridge too far to go to fully autonomous cars",
        position:'Director',
    },
]

const Blog = () => {

    return (
        <section className="services-container mt-5" style={{backgroundColor:"#f1f2f6"}}>
        <Slide left>
        <div className="text-center mt-5">
            <h2 style={{fontWeight:"700"}}>OUR SALES TEAM</h2>
        </div>
        </Slide>
        <div className="d-flex justify-content-center mt-5">
        <Slide bottom>
        <div className="w-75 row mt-3 pt-5 blogs">
            {
                blogData.map(blog => <BlogCard blogs={blog}></BlogCard>)
            }
        </div>
        </Slide>
    </div>
    </section>
    );
};

export default Blog;