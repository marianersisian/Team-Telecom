import React from "react";
import DetailsButton from "./detailsButton";


export default function Tariffs({data}) {
    return (
        <>
            <div className="w-[290px] h-[330px] flex flex-col relative">
                <div className=" text-center h-[60px] w-full flex justify-center items-center">
                    <span className="text-center">{data.title}</span>
                    <span className="text-center ">{data.price}</span>
                </div>
                <div className=" text-center w-full h-[30px] ">
                {data.details.map((item, i) => (
                    <span key={i} className="block text-center w-full h-[40px] border-b  pt-2">
                    <img src={item.icon} alt="" />
                    <span className="text-center ">{item.value}</span> {item.label}
                    </span>
                ))}
                </div>
                <div className="  flex justify-center gap-1 w-full h-[45px]   mt-[140px]">
                {data.socialApps.map((app, j) => (
                    <div key={j} className="text-center ">
                    <img src={app.icon} alt={app.name} />
                    </div>
                ))}
                </div>
                <div className=" h-[50px] absolute bottom-[40px] left-[70px] flex justify-center">
                    <DetailsButton btnText={data.btnText}/>
                </div>
            </div>
        </>
    )
}