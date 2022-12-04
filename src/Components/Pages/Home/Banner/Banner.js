import React from 'react';
import bimg1 from '../../../../assets/images/banner/1.jpg';
import bimg2 from '../../../../assets/images/banner/2.jpg';
import bimg3 from '../../../../assets/images/banner/3.jpg';
import bimg4 from '../../../../assets/images/banner/4.jpg';

const Banner = () => {
    return (
        <div className='banner'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img alt="Banner-img" src={bimg1} className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle btn-accent border-none mx-2">❮</a>
                        <a href="#slide2" className="btn btn-circle btn-accent border-none mx-2">❯</a>
                    </div>
                    <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/4">
                        <h1 className='text-5xl font-bold text-white w-80'>Affordable Price for Car Servicing</h1>
                    </div>
                    <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/2">
                        <p className='text-white text-lg w-96'>There are many variations of passages of  available, but the majority have suffered alteration in some form.</p>
                    </div>
                    <div className="absolute flex justify-start transform -translate-y-1/2 left-24 bottom-1/4">
                        <button className='btn btn-accent mx-3'>Discover More</button>
                        <button className='btn btn-outline btn-accent mx-3'>Latest Project</button>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img alt="Banner-img" src={bimg2} className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle btn-accent border-none mx-2">❮</a>
                        <a href="#slide3" className="btn btn-circle btn-accent border-none mx-2">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img alt="Banner-img" src={bimg3} className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle btn-accent border-none mx-2">❮</a>
                        <a href="#slide4" className="btn btn-circle btn-accent border-none mx-2">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img alt="Banner-img" src={bimg4} className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle btn-accent border-none mx-2">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-accent border-none mx-2">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;