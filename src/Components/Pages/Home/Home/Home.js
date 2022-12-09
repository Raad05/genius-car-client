import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;