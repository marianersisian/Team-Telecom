import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination  } from 'swiper/modules';
import Slides from './mainSlides';
import React from "react";


export default function MainContainer({data}) {
    return (
        <>   
            <div className='relative'>
                <Swiper
                    modules={[Navigation, Autoplay, Pagination]}
                    slidesPerView={1}
                    autoplay={{ delay: 2000 }}
                    loop={true}
                    navigation={true}
                    pagination={{  el: '.my-custom-pagination', clickable: true }} 
                    className='group'
                > 
                    {data.map((item, index) => (
                        <SwiperSlide key = {index}><Slides  
                            title = {item.title} 
                            desc = {item.desc} 
                            btnText = {item.btnText} 
                            src = {item.src} 
                            background = {item.background}   
                        />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="custom-prev "></div>
                <div className="custom-next "></div>
                <div className="my-custom-pagination mt-4 flex justify-center gap-2 absolute z-100 bottom-10 left-100" />
            </div>
        </>
    )
}
