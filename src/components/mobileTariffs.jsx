import Tariffs from "../components/tariffs";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation  } from 'swiper/modules';
import React from "react";
import RedButton from "./redButton";
import './../index.css'

export default function MobileTariffs({data}) {
    return (
        <div className="w-full h-[800px] bg-[rgba(235,237,239,.4)]">
            <div className="w-[1260px] m-auto">
                <div className="w-[1000px] h-[750px] m-auto mb-[150px] relative bg-[#f8f9f9] mt-[-72px] pt-[72px] pl-20 ">
                    <h1 className="text-4xl font-bold text-[#2c3843] ml-[70px] my-[70px] ">Բջջային կապի սակագներ</h1>
                    <div className=" w-full h-full  ">
                        <div className="bg-[url('https://www.telecomarmenia.am/img/texture-gray.png')] w-[280px] h-[430px]  text-white bg-[#4b5d6d] bg-center absolute fixed left-0 top-[100px] z-[70] mt-[165px] ml-20 hover:scale-[1.1] transition duration-500 rounded-md" >
                                <div className="bg-[url('https://www.telecomarmenia.am/img/settings.png')] bg-cover bg-center w-full h-full flex justify-center  items-center flex-col pt-8" >
                                    <h1 className="text-5xl font-bold ">SMART</h1>
                                    <h1 className="text-5xl font-md pb-5">BUSINESS</h1>
                                    <p className="text-2xl text-center">Կարգավորեք Ձեր փաթեթը</p>
                                    <RedButton  btnText = {"Միանալ"}/>
                                </div>
                            </div> 
                        <Swiper
                            modules={[Pagination, Navigation, Autoplay]}
                            slidesPerView={3}
                            autoplay={{ delay: 2000 }}
                            loop={true}
                            pagination={{el:".swiper-pagination", clickable: true }}
                            className=' flex justify-evenly items-center w-full h-full '
                        >   
                        
                            {data.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Tariffs data = {item}/>
                                </SwiperSlide>
                            ))}
                        </Swiper> 
                        
                        <div className="w-full h-5 mt-7">
                            <div className="swiper-pagination  flex justify-center gap-2  absolute left-[44%]" />
                        </div>             
                    </div>
                </div>
            </div>
        </div>
    )
}