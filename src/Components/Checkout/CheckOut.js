import React, { useContext, useEffect, useState } from "react";
import {UserContext} from '../../App';
import { useParams } from "react-router";
import './CheckOut.css';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import { Link } from 'react-router-dom';



const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const CheckOut = () => {
  const { serviceId } = useParams();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [checkoutService, setCheckoutService] = useState({});


  const handleCheckout = () => {
    const newCheckout = ({
        name: loggedInUser.name,
        email: loggedInUser.email,
        serviceName: checkoutService.serviceName,
        serviceCost:  checkoutService.serviceCost,
        serviceDetails: checkoutService.serviceDetails,
        imageURL: checkoutService.imageURL,
        date: (new Date().toDateString("dddd, mmmm, yyyy"))
    })
    fetch('http://localhost:4000/orders', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newCheckout)
    })
    .then(res => res.json())
    .then(data=> console.log(data))
}





  useEffect(() => {
    const url = `http://localhost:4000/services/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCheckoutService(data));
  }, [serviceId]);
  return (
  <section>
      <h2  className='container h2'>Payment Process</h2>
       <div className="container checkout-container">
       <div className="card shadow p-3 mb-5 bg-body rounded" style={{width: "18rem", padding:'10px', borderRadius:'5px'}}>
  <img src={checkoutService.imageURL}  className="card-img-top img-fluid" alt=""/>
  <div className="card-body">
      <h5>{checkoutService.serviceName}</h5>
      <h3>${checkoutService.serviceCost}</h3>
    <p className="card-text">{checkoutService.serviceDetails}</p>
  </div>
</div>
       <div>
       <form className="form-container container">
      <div className="mb-3">
        <label for="name" className="form-label">
          Your Name
        </label>
        <input type="name" placeholder={loggedInUser.name}  className="form-control" id="name" />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          placeholder={loggedInUser.email}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label for="text" className="form-label">
          Your Text
        </label>
        <input type="text"  className="form-control" id="text" />
      </div>
      <Elements stripe={stripePromise}>
      <label for="text" className="form-label">
          Your Cart Information
        </label>
        <CardElement className="form-control"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </Elements>
      <p>Your service charge will be ${checkoutService.serviceCost}</p>
          <br/>
     <Link to="/dashboard/book-list">
     <button onClick={handleCheckout} type="submit" className="btn btn-primary">
        Pay
      </button>
     </Link>
    </form>
       </div>
   </div>
  </section>
  );
};

export default CheckOut;
