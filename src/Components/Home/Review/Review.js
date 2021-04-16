import React, { useEffect, useState } from "react";
import ReviewPost from "../ReviewPost/ReviewPost";
import Slide from "react-reveal/Slide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";





const Review = () => {


  const [reviews, setReviews] = useState([]);

  useEffect(()=>{
      fetch('http://localhost:4000/reviews')
      .then(response=> response.json())
      .then(data => setReviews(data))
  },[])


  return (
    <section className="container">
      <Slide left>
        <div className="text-center mt-5">
          <h4 style={{ fontWeight: "700" }}>CUSTOMER REVIEWS</h4>
          <p>Take a look what our customers say</p>
          <h1>
            <FontAwesomeIcon icon={faQuoteRight} />
          </h1>
        </div>
      </Slide>
      <div className="d-flex justify-content-center mt-5">
        <Slide bottom>
          <div className="w-75 row mt-3 pt-5">
            {reviews.map((review) => (
              <ReviewPost reviews={review}></ReviewPost>
            ))}
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Review;
