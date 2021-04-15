import React from 'react';
import car1 from '../../../Photos/rolls-royce.jpg';
import car2 from '../../../Photos/redCar.jpg';
import car3 from '../../../Photos/farari.jpg';
import car4 from '../../../Photos/rolls-royce-ghost-bl-12.jpg';
import car5 from '../../../Photos/bmzi8.jpg';
import car6 from '../../../Photos/porshe.jpg';
import './Carousel.css';



const Carousel = () => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active slider-item">
      <img src={car2} className="d-block w-100" alt=""/>

      <div className="carousel-caption d-none d-md-block carousel-container">
        <h5 className="animate__animated animate__bounceInRight">mazda mx-5 miata </h5>

        <p className="animate__animated animate__bounceInLeft">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloremque fugiat aspernatur voluptatem quae voluptatum quos beatae accusamus! Dignissimos neque pariatur rerum reprehenderit autem corporis. Deleniti tempore tempora quam numquam?</p>

        <p className="animate__animated animate__backInRight"><a href="https://www.mazdausa.com/vehicles/2021-mx-5-miata"><button type="button" class="btn btn-outline-info">Learn More</button> </a></p>
      </div>
    </div>
    <div className="carousel-item slider-item">
      <img src={car4} className="d-block w-100" alt=""/>
      <div className="carousel-caption d-none d-md-block carousel-container">
        <h5 className="animate__animated animate__bounceInRight"> Rolls Royce Ghost </h5>

        <p className="animate__animated animate__bounceInLeft">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloremque fugiat aspernatur voluptatem quae voluptatum quos beatae accusamus! Dignissimos neque pariatur rerum reprehenderit autem corporis. Deleniti tempore tempora quam numquam?</p>

        <p className="animate__animated animate__backInRight"><a href="https://www.rolls-roycemotorcars.com/en_US/showroom/ghost.html"><button type="button" class="btn btn-outline-info">Learn More</button> </a></p>
      </div>
    </div>
    <div className="carousel-item slider-item">
      <img src={car1} className="d-block w-100" alt=""/>
      <div className="carousel-caption d-none d-md-block carousel-container">
        <h5 className="animate__animated animate__bounceInRight">rolls royce phantom </h5>

        <p className="animate__animated animate__bounceInLeft">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloremque fugiat aspernatur voluptatem quae voluptatum quos beatae accusamus! Dignissimos neque pariatur rerum reprehenderit autem corporis. Deleniti tempore tempora quam numquam?</p>

        <p className="animate__animated animate__backInRight"><a href="https://www.rolls-roycemotorcars.com/en_US/showroom/phantom-in-detail.html"><button type="button" class="btn btn-outline-info">Learn More</button> </a></p>
      </div>
    </div>
    <div className="carousel-item slider-item">
      <img src={car5} className="d-block w-100" alt=""/>
      <div className="carousel-caption d-none d-md-block carousel-container">
        <h5 className=" animate__animated animate__bounceInRight">bmw i8 </h5>

        <p className=" animate__animated animate__bounceInLeft">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloremque fugiat aspernatur voluptatem quae voluptatum quos beatae accusamus! Dignissimos neque pariatur rerum reprehenderit autem corporis. Deleniti tempore tempora quam numquam?</p>

        <p className="animate__animated animate__backInRight"><a href="https://www.bmw.com/en/innovation/bmw-i8-as-future-classic.html"><button type="button" class="btn btn-outline-info">Learn More</button> </a></p>
      </div>
    </div>
    <div className="carousel-item slider-item">
      <img src={car3} className="d-block w-100" alt=""/>
      <div className="carousel-caption d-none d-md-block carousel-container">
        <h5 className=" animate__animated animate__bounceInRight">Ferrari 458  </h5>

        <p className=" animate__animated animate__bounceInLeft">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloremque fugiat aspernatur voluptatem quae voluptatum quos beatae accusamus! Dignissimos neque pariatur rerum reprehenderit autem corporis. Deleniti tempore tempora quam numquam?</p>

        <p className="animate__animated animate__backInRight"><a href="https://www.ferrari.com/en-EN/auto/458-italia"><button type="button" class="btn btn-outline-info">Learn More</button> </a></p>
      </div>
    </div>
    <div className="carousel-item slider-item">
      <img src={car6} className="d-block w-100" alt=""/>
      <div className="carousel-caption d-none d-md-block carousel-container">
        <h5 className=" animate__animated animate__bounceInRight">Porsche Boxster S </h5>

        <p className=" animate__animated animate__bounceInLeft">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloremque fugiat aspernatur voluptatem quae voluptatum quos beatae accusamus! Dignissimos neque pariatur rerum reprehenderit autem corporis. Deleniti tempore tempora quam numquam?</p>

        <p className="animate__animated animate__backInRight"><a href="https://www.porsche.com/international/models/718/718-models/718-boxster-s/"><button type="button" class="btn btn-outline-info">Learn More</button> </a></p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );
};

export default Carousel;