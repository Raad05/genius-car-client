import React from 'react';

const ServiceItem = ({ service }) => {
    const { title, img, price } = service;

    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Service" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <p className='font-semibold text-orange-600'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-error text-white font-semibold">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;