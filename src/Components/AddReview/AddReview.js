import React from 'react';
import { useForm } from "react-hook-form";
import './AddReview.css';
import reviewPic from '../../Photos/Icons/review.svg';

const AddReview = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
        const reviewData = {
            name: data.name,
            companyName: data.companyName,
            description: data.description,
        }

        const url = `http://localhost:4000/addReview`;
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
        <div className="review-container">
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
    );
};

export default AddReview;