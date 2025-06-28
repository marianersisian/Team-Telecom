import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; // ✅ ճիշտ ուղի
import React from 'react';
import EshopProduct from './eshopProduct';

export default function EshopProducts({ data }) {
    return (
        <div className='w-[1200px] h-[800px] m-auto relative pl-[100px] mb-[100px]'>
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{ delay: 2000 }}
                loop={true}
                pagination={{ clickable: true }}
                className='h-full w-[1000px] relative'
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <EshopProduct
                            title={item.title}
                            gb={item.gb}
                            img={item.img}
                            price={item.price}
                            monthlyPrice={item.monthlyPrice}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <style>
                {`
                .swiper-pagination-bullet {
                    background-color: #ccc;
                    width: 10px;
                    height: 10px;
                    margin: 0 4px;
                    border-radius: 9999px;
                }
                .swiper-pagination-bullet-active {
                    background-color: #f04d4d;
                }
                `}
            </style>
        </div>
    );
}
