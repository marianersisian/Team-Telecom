import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import Slides from './mainSlides';
import React, { FC } from "react";

interface SlideItem {
  title: string;
  desc: string;
  btnText: string;
  src: string;
  background: string;
}

interface MainContainerProps {
  data: SlideItem[];
}

const MainContainer: FC<MainContainerProps> = ({ data }) => {
  return (
    <div className='relative'>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        loop={true}
        navigation={true}
        pagination={{ el: '.my-custom-pagination', clickable: true }} 
      > 
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Slides  
              title={item.title} 
              desc={item.desc} 
              btnText={item.btnText} 
              src={item.src} 
              background={item.background}   
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-prev" />
      <div className="custom-next" />
      <div className="my-custom-pagination mt-4 flex justify-center gap-2 absolute z-[90] bottom-[40px] left-[630px]" />
    </div>
  );
};

export default MainContainer;
