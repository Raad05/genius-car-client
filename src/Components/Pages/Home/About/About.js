import React from 'react';
import './About.css';
import person from '../../../../assets/images/about_us/person.jpg';
import parts from '../../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className='about'>
            <div className="hero my-20">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2 relative'>
                        <img src={person} className="max-w-sm border-8 border-white shadow-2xl" alt='' />
                        <img src={parts} className="max-w-sm shadow-2xl absolute right-10 top-24 border-8 border-white w-3/5" alt='' />
                    </div>
                    <div className='w-1/2'>
                        <h3 className='text-xl font-bold text-orange-600 mb-3'>About Us</h3>
                        <h1 className="text-5xl font-bold pr-20">We are qualified & of experience in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <button className="btn btn-error text-white font-bold">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;