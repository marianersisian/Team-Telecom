import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination  } from 'swiper/modules';
import Slides from './mainSlides';
import { mainSlidesData } from '../data/serviceData';


export default function MainContainer() {
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
                    {mainSlidesData.map((data, index) => (
                        <SwiperSlide key = {index}><Slides  
                            title = {data.title} 
                            desc = {data.desc} 
                            btnText = {data.btnText} 
                            src = {data.src} 
                            background = {data.background}   
                        />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="custom-prev "></div>
                <div className="custom-next "></div>
                <div className="my-custom-pagination mt-4 flex justify-center gap-2 absolute -mt-[20px] " />
                </div>
        </>
    )
}
