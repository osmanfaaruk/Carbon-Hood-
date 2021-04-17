import React, { useEffect, useState } from "react";
import Slide from 'react-reveal/Slide';
import ServicesCard from "../ServicesCard/ServicesCard";
import Fade from 'react-reveal/Fade';





const Services = () => {

    const [service, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/services')
        .then(response=> response.json())
        .then(data => setServices(data))
    },[])

    return (
            <section className="services-container mt-5 bg-dark text-white" >
        <Fade bottom> 
        <div className="text-center mt-5">
            <h2 style={{fontWeight:"700"}}>SERVICES WE PROVIDE</h2>
        </div>
        </Fade>
        <div className="d-flex justify-content-center mt-5">
        <Slide bottom>
        <div className="w-75 row mt-3 pt-5">
            {
                service.map(service => <ServicesCard services={service}></ServicesCard>)
            }
        </div>
        </Slide>
    </div>
    </section>
    );
};

export default Services;