import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import React, { useEffect } from 'react';
import EshopMobileDetails from './eshopMobileDetails';

export default function EshopMobile({ data }) {
  useEffect(() => {
    // Optional: enable autoplay on interaction (fix if needed)
  }, []);

  return (
    <div className="w-[1260px] h-[500px] m-auto relative pl-[100px] mb-[100px]">

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{ delay: 2000 }}
        loop={false}
        pagination={{ clickable: true }}
        className="h-full w-[1130px] absolute top-[50px] left-[-30px]"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <EshopMobileDetails
              title={item.title}
              mobileNumber={item.mobileNumber}
              firstPrice={item.firstPrice}
              discountPrice={item.discountPrice}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      
    </div>
  );
}
