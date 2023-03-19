import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className='about flex justify-center my-20'>
            <div className='w-1/3 relative mx-10'>
                <img src={person} alt="Person" className='w-4/5 rounded absolute' />
                <img src={parts} alt="Parts" className='w-3/5 absolute top-28 left-60 border-4 border-white rounded' />
            </div>
            <div className='w-1/3 mx-10'>
                <h3 className='text-3xl my-3 font-bold text-orange-500'>About Us</h3>
                <h1 className='text-5xl my-3 font-bold'>We are qualified & of experience in this field</h1>
                <p className='text-lg my-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br /><br />The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <button className='btn bg-orange-600 hover:bg-orange-700 border-none'>Get More Info</button>
            </div>
        </div>
    );
};

export default About;