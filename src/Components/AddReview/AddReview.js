import React from 'react';
import { useForm } from "react-hook-form";
import './AddReview.css';
import reviewPic from '../../Photos/Icons/review.svg';

import Zoom from 'react-reveal/Zoom'

const AddReview = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
        const reviewData = {
            name: data.name,
            companyName: data.companyName,
            description: data.description,
        }

        const url = `https://damp-wildwood-49631.herokuapp.com/addReview`;
        fetch(url, {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        .then(res => console.log('Server site response', res));
  };

        
    return (
        <Zoom >
        <div className="review-container shadow p-3 mb-5 bg-body rounded">
    <div className="review-form container">
    <form onSubmit={handleSubmit(onSubmit)}>
    <h6>You Name</h6>
    <input name="name" placeholder="Your Name" className="btn btn-outline-dark" {...register("name",{required:"This Is Required" })}  />
    <br/> <br/> 
    <h6>Company Name</h6>
     <input  name="companyName" className="btn btn-outline-dark"  placeholder="Company's Name" 
      {...register("companyName",{required:"This Is Required" })}  />
      <br/> <br/> 
    <h6>Your Review</h6>
     <input style={{height:'200px'}} name="description" className="form-control text-center" placeholder="Description"  
      {...register("description",{required:"This Is Required" })} />
     <br/> <br/> 
    <input type="submit" value="Add Review" className="btn btn-primary"  />
     </form>
    </div>
        <div className="">
            <img src={reviewPic} alt=""/>
        </div>
    </div>
    </Zoom>
    );
};

export default AddReview;