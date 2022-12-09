import React from 'react';
import bimg1 from '../../../../assets/images/banner/1.jpg';
import bimg2 from '../../../../assets/images/banner/2.jpg';
import bimg3 from '../../../../assets/images/banner/3.jpg';
import bimg4 from '../../../../assets/images/banner/4.jpg';
import BannerItem from '../BannerItem/BannerItem';

const Banner = () => {
    const bannerItems = [
        {
            image: bimg1,
            left: 4,
            id: 1,
            right: 2
        },
        {
            image: bimg2,
            left: 1,
            id: 2,
            right: 3
        },
        {
            image: bimg3,
            left: 2,
            id: 3,
            right: 4
        },
        {
            image: bimg4,
            left: 3,
            id: 4,
            right: 1
        }
    ];

    return (
        <div className='banner'>
            <div className="carousel w-full py-10">
                {
                    bannerItems.map(bannerItem => <BannerItem
                        image={bannerItem.image}
                        id={bannerItem.id}
                        left={bannerItem.left}
                        right={bannerItem.right}>
                    </BannerItem>)
                }
            </div>
        </div>
    );
};

export default Banner;