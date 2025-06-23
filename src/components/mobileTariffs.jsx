import Tariffs from "../components/tariffs";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination  } from 'swiper/modules';
import React from "react";

export default function MobileTariffs({data}) {
    return (
        <>
            <div className="w-[1260px] h-[380px] m-auto ">
                <h1 className="text-4xl font-bold text-[#2c3843] ml-[70px] my-[70px] ">Բջջային կապի սակագներ</h1>
                <div className=" w-full h-full "> 
                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={3}
                        pagination={{el:".swiper-pagination", clickable: true }}
                        className='group flex justify-evenly items-center '
                    >   
                        <div className="bg-[url('https://www.telecomarmenia.am/img/texture-gray.png')] w-[290px] h-[300px]  text-white bg-[#4b5d6d] bg-center absolute fixed left-0 top-[100px] " >
                            <div className="bg-[url('https://www.telecomarmenia.am/img/settings.png')] bg-cover bg-center" >
                                <h1 className="text-4xl font-bold ">SMART</h1>
                                <h1>BUSINESS</h1>
                                <p>Կարգավորեք Ձեր փաթեթը</p>
                                <button>Միանալ</button>
                            </div>
                        </div>
                        {data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Tariffs data = {item}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>   
                    <div className="w-full h-5 mt-7">
                <div className="swiper-pagination  flex justify-center gap-2  " />
                </div>             
                </div>
            </div>
        </>
    )
}