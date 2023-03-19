import React from 'react';
import slide1 from '../../../assets/images/homeCarousel/1.jpg';
import slide2 from '../../../assets/images/homeCarousel/2.jpg';
import slide3 from '../../../assets/images/homeCarousel/3.jpg';
import slide4 from '../../../assets/images/homeCarousel/4.jpg';
import './Slider.css';

const Slider = () => {
    const slides = [
        { id: 1, url: slide1, next: 2, prev: 4 },
        { id: 2, url: slide2, next: 3, prev: 1 },
        { id: 3, url: slide3, next: 4, prev: 2 },
        { id: 4, url: slide4, next: 1, prev: 3 }
    ];

    return (
        <div className="carousel w-3/5 mx-auto my-10 rounded-lg relative">
            {
                slides.map(slide =>
                    <div key={slide.id} id={`slide${slide.id}`} className="carousel-item relative w-full">
                        <div className="img-gradient">
                            <img src={slide.url} className="w-full" alt='slide' />
                        </div>
                        <div className='absolute top-20 left-20 text-white w-96'>
                            <h1 className='text-6xl font-bold'>Affordable Price for Car Servicing</h1>
                            <p className='text-xl my-3'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                            <button className='btn mr-2 my-3 bg-orange-600 hover:bg-orange-700 border-none'>Discover More</button>
                            <button className="btn mr-2 my-3 btn-outline text-white">Latest Project</button>
                        </div>
                        <div className="absolute flex justify-center transform -translate-y-1/2 right-5 bottom-5">
                            <a href={`#slide${slide.prev}`} className="btn btn-circle mx-3 bg-orange-600 hover:bg-orange-700 border-none">❮</a>
                            <a href={`#slide${slide.next}`} className="btn btn-circle mx-3 bg-orange-600 hover:bg-orange-700 border-none">❯</a>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Slider;