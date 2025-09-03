import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import News from "./news";
import React, { FC } from "react";

export type NewsItem = {
    image: string;
    date: string;
    title: string;
};

type NewsBlockProps = {
    data: NewsItem[];
};

const NewsBlock: FC<NewsBlockProps> = ({ data }) => {
    return (
        <>
            <div className="text-center font-bold text-4xl mb-7">
                <h1>Լրահոս</h1>
            </div>
            <div className="w-[1260px] m-auto relative">
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={3}
                    pagination={{ el: ".swiper-pagination", clickable: true }}
                    className='group'
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <News
                                image={item.image}
                                date={item.date}
                                title={item.title}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="w-full h-5 mt-7">
                    <div className="swiper-pagination flex justify-center gap-2" />
                </div>
            </div>
        </>
    );
};

export default NewsBlock;
