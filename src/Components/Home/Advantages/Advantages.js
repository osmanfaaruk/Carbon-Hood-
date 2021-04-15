import React from 'react';
import Delearship from '../../../Photos/delearship.png';
import Safety from '../../../Photos/Safety.png';
import Support from '../../../Photos/freeSupoort.png';
import AdvantagesCard from '../AdvantagesCard/AdvantagesCard';
import Slide from 'react-reveal/Slide';

const advantagesData = [
    {
        name: 'Largest Dealership',
        img: Delearship
    },
    {
        name: 'Multipoint Safety',
        img: Safety
    },
    {
        name: 'Free Support',
        img: Support
    }
]

const Advantages = () => {
    return (
        <section className="services-container mt-5" >
        <Slide left>
        <div className="text-center mt-5">
            <h1 style={{fontWeight:"700"}}>OUR ADVANTAGES</h1>
        </div>
        </Slide>
        <div className="d-flex justify-content-center mt-5">
        <Slide bottom>
        <div className="w-75 row mt-3 pt-5">
            {
                advantagesData.map(advantages => <AdvantagesCard advantages={advantages} key={advantages.name}></AdvantagesCard>)
            }
        </div>
        </Slide>
    </div>
    </section>
    );
};

export default Advantages;