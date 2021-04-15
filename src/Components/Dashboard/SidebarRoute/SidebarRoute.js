import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTasks,faPlus, faShoppingCart, faComments, faUserFriends} from '@fortawesome/free-solid-svg-icons'

const SidebarRoute = () => {
    return (
        <div className="w-100" style={{height:"100vh", backgroundColor:'#82ccdd'}}>
            <div className="selection-part text-center"> 
           <br/>
           <br/>
            <div>

                <Link style={{textDecoration:"none"}} to="/dashboard/book">
                <span className="btn btn-outline-dark" type="button">
                <FontAwesomeIcon icon={faShoppingCart} /> {" "}
               Book</span>
                </Link>
           <br/>
           <br/>
                <Link style={{textDecoration:"none"}} to="/dashboard/bookList">
                <span className="btn btn-outline-dark" type="button">
                <FontAwesomeIcon icon={faTasks} /> {" "}
               Book List</span>
                </Link>
           <br/>
           <br/>
                <Link style={{textDecoration:"none"}} to="/dashboard/review">
                <span className="btn btn-outline-dark" type="button">
                <FontAwesomeIcon icon={faComments} /> {" "}
               Review</span>
                </Link>
           <br/>
           <br/>
                <Link style={{textDecoration:"none"}} to="/dashboard/orderList">
                <span className="btn btn-outline-dark" type="button">
                <FontAwesomeIcon icon={faTasks} /> {" "}
                Order List</span>
                </Link>
           <br/>
           <br/>
           
               <Link style={{textDecoration:"none", color:"white"}} to="/dashboard/addService">
                <button className="btn btn-outline-dark" type="button">
                <FontAwesomeIcon icon={faPlus} />{" "}Add Service</button>
                </Link>
           <br/>
           <br/>
           
               <Link style={{textDecoration:"none", color:"white"}} to="/dashboard/makeAdmin">
                <button className="btn btn-outline-dark" type="button">
                <FontAwesomeIcon icon={faUserFriends} />{" "}Make Admin</button>
                </Link>
           <br/>
           <br/>
                <Link style={{textDecoration:"none"}} to="/dashboard/manageServices">
                <button className="btn btn-outline-dark" type="button">
                <FontAwesomeIcon icon={faTasks} /> {" "}
                Manage Services</button>
                </Link>
            </div>
           </div>
        </div>
    );
};

export default SidebarRoute;