import React from 'react';
import Sedan from '../../../Photos/saden.png';
import Sport from '../../../Photos/sportcars.png';
import Luxury from '../../../Photos/luxurycar.png';
import SuperCar from '../../../Photos/supercar.png';
import Pickups from '../../../Photos/pickups.png';
import Suv from '../../../Photos/suvs.png';
import Truck from '../../../Photos/pickups.png';
import Van from '../../../Photos/van.png';
import Slide from 'react-reveal/Slide';
import VehicleTypes from '../VehicleTypes/VehicleTypes';

const vehicleData = [
    {
        name: 'Sedan',
        img: Sedan,
        details:'6 Offers starting from $30,000 '
    },
    {
        name: 'Sport',
        img: Sport,
        details:'3 Offers starting from $52,000 '
    },
    {
        name: 'Luxury',
        img:Luxury ,
        details:'8 Offers starting from $69,000'
    },
    {
        name: 'SuperCar',
        img: SuperCar,
        details:'7 Offers starting from $92,000'
    },
    {
        name: 'Pickups',
        img: Pickups,
        details:'5 Offers starting from $12,000'
    },
    {
        name: 'Suv',
        img: Suv,
        details:'6 Offers starting from $13,900'
    }
]

const Vehicles = () => {
    return (
        <section className="services-container" style={{backgroundColor:"#f1f2f6"}}>
        <Slide left>
        <div className="text-center">
            <h2 style={{fontWeight:"700"}}>TYPES OF VEHICLES</h2>
            <p style={{fontWeight:"600"}}>THE AUTOS WE DEALS IN</p>
        </div>
        </Slide>
        <div className="d-flex justify-content-center mt-5">
        <Slide bottom>
        <div className="w-75 row mt-3 pt-5">
            {
                vehicleData.map(vehicle => <VehicleTypes vehicles={vehicle}></VehicleTypes>)
            }
        </div>
        </Slide>
    </div>
    </section>
    );
};

export default Vehicles;