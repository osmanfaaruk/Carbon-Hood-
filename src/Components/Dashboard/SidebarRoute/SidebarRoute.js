
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTasks,faPlus, faComments, faUserFriends} from '@fortawesome/free-solid-svg-icons'
import React, { useContext, useEffect, useState } from 'react';
import { UserContext  } from '../../../App';

const SidebarRoute = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:4000/isAdmin', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data =>setAdmin(data))
    },[])

    return (
        <div className="w-100" style={{height:"100vh", backgroundColor:'#82ccdd'}}>
            <div className="selection-part text-center"> 
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
            <div>
                <Link style={{textDecoration:"none"}} to="/dashboard/book-list">
                <span style={{width:'300px'}} className="btn btn-outline-dark" type="button">
                <FontAwesomeIcon icon={faTasks} /> {" "}
               Book List</span>
                </Link>
           <br/>
           <br/>
                <Link style={{textDecoration:"none"}} to="/dashboard/add-review">
                <span style={{width:'300px'}} className="btn btn-outline-dark" type="button">
                <FontAwesomeIcon icon={faComments} /> {" "}
                Review</span>
                </Link>
           <br/>
           <br/>
          {isAdmin && <div>
          <Link style={{textDecoration:"none"}} to="/dashboard/order-list">
                <span style={{width:'300px'}} className="btn btn-outline-dark" type="button">
                <FontAwesomeIcon icon={faTasks} /> {" "}
                Order List</span>
                </Link>
           <br/>
           <br/>
           
               <Link style={{textDecoration:"none", color:"white"}} to="/dashboard/add-services">
                <button style={{width:'300px'}} className="btn btn-outline-dark" type="button">
                <FontAwesomeIcon icon={faPlus} />{" "}Add Service</button>
                </Link>
           <br/>
           <br/>
           
               <Link style={{textDecoration:"none", color:"white"}} to="/dashboard/make-admin">
                <button style={{width:'300px'}} className="btn btn-outline-dark" type="button">
                <FontAwesomeIcon icon={faUserFriends} />{" "}Make Admin</button>
                </Link>
           <br/>
           <br/>
                <Link style={{textDecoration:"none"}} to="/dashboard/manage-services">
                <button style={{width:'300px'}} className="btn btn-outline-dark" type="button">
                <FontAwesomeIcon icon={faTasks} /> {" "}
                Manage Services</button>
                </Link>
          </div>}
            </div>
           </div>
           
        </div>
    );
};

export default SidebarRoute;