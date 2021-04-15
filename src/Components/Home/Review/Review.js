import React from "react";
import ReviewPost from "../ReviewPost/ReviewPost";
import Slide from 'react-reveal/Slide';
import mypic from '../../../Photos/mypic.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';


const reviewData = [
  {
    img: mypic,
    name: "Solim Uddin",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam",
    status: "Buyer",
  },
  {
    img: mypic,
    name: "Korim Uddin",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam",
    status: "Helel Uddin",
  },
  {
    img: mypic,
    name: "Korim Uddin",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam",
    status: "Helel Uddin",
  },
];

const Review = () => {
  return (


    <section className="container">
    <Slide left>
    <div className="text-center mt-5">
        <h4 style={{fontWeight:"700"}}>CUSTOMER REVIEWS</h4>
        <p>Take a look what our customers say</p>
        <h1><FontAwesomeIcon icon={faQuoteRight} /></h1>
    </div>
    </Slide>
    <div className="d-flex justify-content-center mt-5">
    <Slide bottom>
    <div className="w-75 row mt-3 pt-5">
    {reviewData.map(review => (
            <ReviewPost reviews={review}></ReviewPost>
          ))}
    </div>
    </Slide>
</div>
</section>

  );
};

export default Review;
