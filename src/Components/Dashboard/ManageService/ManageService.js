import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
const ManageService = () => {

    const [manageServices, setManageServices] = useState([]);
    const [deleteService, setDeleteService] = useState([]);



    const  handleDeleteService = id => {
      fetch(`http://localhost:4000/delete/${id}`, {
        method: "DELETE",
    })
    .then(res => res.json())
    .then(data => setDeleteService(data))
    }

    useEffect(()=>{
        fetch('http://localhost:4000/services')
        .then(res=> res.json())
        .then(data=> setManageServices(data))
    },[manageServices])

    return (
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Service Name</th>
            <th scope="col">Service Cost</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
                  {
                      manageServices.map((list)=> (
                          <tr>
                      <td>{list.serviceName}</td>
                      <td>${list.serviceCost}</td>
                      <td>
                    <button onClick={()=> handleDeleteService(list._id)} className="btn btn-danger"><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                      </tr>
                      ))
                  }
        </tbody>
      </table>
    );
};

export default ManageService;