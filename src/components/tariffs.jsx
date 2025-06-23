import React from "react";


export default function Tariffs({data}) {
    return (
        <>
            <div className="w-[290px] h-[300px] flex flex-col gap-y-4 ">
                <div className="">
                    <span className="">{data.title}</span>
                    <span className="">{data.price}</span>
                </div>
                <div className="">
                {data.details.map((item, i) => (
                    <span key={i} className="">
                    <img src={item.icon} alt="" />
                    <span className="">{item.value}</span> {item.label}
                    </span>
                ))}
                </div>
                <div className="flex gap-1">
                {data.socialApps.map((app, j) => (
                    <span key={j} className="">
                    <img src={app.icon} alt={app.name} />
                    </span>
                ))}
                </div>
                <span className=" text-[#F04D4D] font-bold w-[150px] h-[50px] flex justify-center items-center border-2 border-[#F04D4D] rounded-full hover:bg-[#f04d4d] hover:text-white">{data.btnText}</span>
            </div>
        </>
    )
}