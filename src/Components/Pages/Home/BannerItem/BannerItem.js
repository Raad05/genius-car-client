import React from 'react';
import './BannerItem.css';

const BannerItem = ({ image, id, left, right }) => {
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='img-gradient'>
                <img alt="Banner-img" src={image} className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
                <a href={`#slide${left}`} className="btn btn-circle btn-error border-none mx-2">❮</a>
                <a href={`#slide${right}`} className="btn btn-circle btn-error border-none mx-2">❯</a>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-5xl font-bold text-white w-80'>Affordable Price for Car Servicing</h1>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/2">
                <p className='text-white text-lg w-96'>There are many variations of passages of  available, but the majority have suffered alteration in some form.</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 bottom-1/4">
                <button className='btn btn-error mx-3'>Discover More</button>
                <button className='btn btn-outline btn-error mx-3'>Latest Project</button>
            </div>
        </div>
    );
};

export default BannerItem;