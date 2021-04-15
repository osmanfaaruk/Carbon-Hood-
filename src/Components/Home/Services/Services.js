import React from 'react';
import Repairing from '../../../Photos/AutoRepairing.png';
import CheckUp from '../../../Photos/TransmissonCheckup.png';
import Inspection from '../../../Photos/inspectiomn.png';
import ServicesCard from '../ServicesCard/ServicesCard';
import Slide from 'react-reveal/Slide';

const servicesData = [
    {
        name: 'Auto Repairing',
        img: Repairing,
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt,'
    },
    {
        name: 'Transmission Checkup',
        img: CheckUp,
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt,'
    },
    {
        name: 'Vehicle Inspection',
        img: Inspection,
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt,'
    }
]

const Services = () => {
    return (
       
            <section className="services-container mt-5 bg-dark text-white" >
        <div className="text-center mt-5">
            <h2 style={{fontWeight:"700"}}>SERVICES WE PROVIDE</h2>
        </div>
        <div className="d-flex justify-content-center mt-5">
        <Slide bottom>
        <div className="w-75 row mt-3 pt-5">
            {
                servicesData.map(service => <ServicesCard services={service}></ServicesCard>)
            }
        </div>
        </Slide>
    </div>
    </section>
    );
};

export default Services;