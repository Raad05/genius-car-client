import React, { useEffect, useState } from 'react';
import ServiceItem from '../ServiceItem/ServiceItem';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className='services my-20'>
            <div className='titles text-center my-10'>
                <h3 className='text-xl font-bold text-orange-600'>Services</h3>
                <h1 className='text-5xl font-bold'>Our Service Area</h1>
                <p className='text-lg px-20 mt-5'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className="service-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    services.map(service => <ServiceItem
                        key={service._id}
                        service={service}>
                    </ServiceItem>)
                }
            </div>
        </div>
    );
};

export default Services;