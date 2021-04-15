import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Advantages from '../Advantages/Advantages';
import Blog from '../Blog/Blog';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Footer from '../Shared/Footer/Footer';
import Vehicles from '../Vehicles/Vehicles';

const Home = () => {
    return (
        <div>
            <Header/>
            <Advantages/>
            <Services/>
            <Vehicles/>
            <AboutUs/>
            <Blog/>
            <Footer/>
        </div>
    );
};

export default Home;