import React from 'react';
import CarPic from '../../../Photos/car2png.png';
import Slide from 'react-reveal/Slide';

const AboutUs = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
        <div className="container mb-5">
           <div className="row mb-5">
           <Slide bottom>
                <div className="col-md-7 align-self-center">
                    <h1>ABOUT CARBON HOOD </h1>
                    <p className="text-secondary my-5">
                        Carbon hood dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
                    </p>
                    <button className="btn btn-outline-success">Learn More About Us</button>
                </div>
           </Slide>
               <Slide right>
               <div className="col-md-5 mb-4 m-md-0">
                    <img className="img-fluid" src={CarPic} alt=""/>
                </div>
               </Slide>
            </div>
        </div>
    </section>
    );
};

export default AboutUs;