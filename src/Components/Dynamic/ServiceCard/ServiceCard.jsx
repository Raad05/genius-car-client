import React from 'react';

const ServiceCard = ({ props }) => {
    const { title, img, price } = props;
    return (
        <div className="service-card card w-96 border-2 border-gray-200 mx-auto">
            <figure><img src={img} alt="Service" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <p className='text-orange-600 font-bold'>Price: {price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline hover:bg-orange-600 hover:border-none text-orange-600">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;