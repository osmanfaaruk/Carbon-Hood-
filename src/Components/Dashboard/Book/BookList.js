import React from 'react';
import './Booklist.css';
import Zoom from 'react-reveal/Zoom'
const BookList = (props) => {
    const { email,serviceName, serviceCost,imageURL,date, update} = props.bookList;
    return (
        <Zoom>
        <div className="card mb-3 container orderList-container shadow p-3 mb-5 bg-body rounded " >
        <div className="row g-0">
       <div className="col-md-3 order-img">
       <img className="img-fluid" src={imageURL} alt=""/>
       </div>
       <div className="col-md-8">
       <div className="card-body">
       <h4 className="card-title">{serviceName}</h4>
       <br/>
       <h5>${serviceCost}</h5>
       <h6>Service Booked at: {date}</h6>
       <p>Check your mail for more information about booked service <br/> {email}</p>
       <h6>Status {update}</h6>
       </div>
       </div>
       </div>
      </div>
      </Zoom>
    );
};

export default BookList;