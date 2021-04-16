
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './AddServices.css';

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURl] = useState(null)
  const onSubmit = data => {
        const serviceData = {
            serviceName: data.serviceName,
            serviceDetails: data.serviceDetails,
            serviceCost: data.serviceCost,
            imageURL: imageURL
        }

        const url = `http://localhost:4000/addService`;
        fetch(url, {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        .then(res => console.log('Server site response', res));
  };

  const handleUpload = event => {
      console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'f0e5379e7b202c83aeeaa508d9778b70');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
  }

  console.log(watch("example"));

    return (
        <div className="admin-container">
        <div className=" container">
    <div className="upload-form">
    <form onSubmit={handleSubmit(onSubmit)}>
    <h6>Service Name</h6>
    <input name="serviceName" placeholder="Enter Name" className="btn btn-outline-dark" style={{width:'50%'}} {...register("serviceName",{required:"This Is Required" })}  />
    <br/> <br/> 
    <h6>Service Cost</h6>
     <input style={{width:'50%'}} name="serviceCost" className="btn btn-outline-dark"  placeholder="Enter Price" 
      {...register("serviceCost",{required:"This Is Required" })}  />
      <br/> <br/> 
    <h6>Service Details</h6>
     <input style={{width:'50%', height:'200px'}} name="serviceDetails" className="form-control text-center" placeholder="Details"  
      {...register("serviceDetails",{required:"This Is Required" })} />
     <br/> <br/> 
     <h6>Demo Picture</h6> 
     <input  style={{width:'50%'}} name="servicePicture" onChange={handleUpload} className="btn btn-outline-dark" type="file"/>
     <br/> <br/> 
    <input style={{width:'50%'}} type="submit" value="Add Service" className="btn btn-primary"  />
     </form>
    </div>
        </div>
    </div>
    );
};

export default AddService;