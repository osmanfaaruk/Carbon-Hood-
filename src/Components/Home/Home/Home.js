import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Advantages from '../Advantages/Advantages';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Vehicles from '../Vehicles/Vehicles';

const Home = () => {
    return (
        <div>
            <Header/>
            <Advantages/>
            <Services/>
            <Vehicles/>
            <AboutUs/>
        </div>
    );
};

export default Home;