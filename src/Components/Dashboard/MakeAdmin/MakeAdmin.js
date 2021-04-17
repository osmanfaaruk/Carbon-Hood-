import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Img from '../../../Photos/Icons/makeAdmin.svg';
import './MakeAdmin.css';
import Zoom from 'react-reveal/Zoom'


const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const adminName = {
      email: data.email,
    };

    const url = `http://localhost:4000/addService`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(adminName),
    }).then((res) => console.log("Server site response", res));
  };
  return (
    <Zoom>
    <div className="container admin-container shadow p-3 mb-5 bg-body rounded">
     <div>
     <form onSubmit={handleSubmit(onSubmit)}>
        <h6>Email</h6>
        <input
          name="email"
          placeholder="Email"
          className="btn btn-outline-dark"
          {...register("email", { required: "This Is Required" })}
        />
        <br /> <br />
        <input type="submit" value="Make Admin" className="btn btn-primary" />
      </form>
     </div>
     <div>
         <img src={Img} alt=""/>
     </div>
    </div>
    </Zoom>
  );
};

export default MakeAdmin;
