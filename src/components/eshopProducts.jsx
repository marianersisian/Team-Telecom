import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import EshopProduct from "./eshopProduct";
import React from 'react';
import EshopProductDetails from './eshopProductDetails';

export default function EshopProducts({ data }) {
    return (
        <div className='w-[1200px] h-[800px] m-auto relative  pl-[100px] '>
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={3}
                autoplay={{ delay: 2000 }}
                loop={true}
                pagination={{ el: '.my-custom-pagination', clickable: true }}
                className='group h-full w-[1000px] absolute top-[50px] left-[0px]'
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <EshopProduct
                            title={item.title}
                            gb={item.gb}
                            details = {<EshopProductDetails img={item.img} price={item.price} monthlyPrice={item.monthlyPrice}/>}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="my-custom-pagination mt-4 flex justify-center gap-2 absolute z-[100] bottom-10 left-1/2 transform -translate-x-1/2" />
        </div>
    );
}
