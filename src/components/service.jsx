import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Service ({title, image, width, desc, btnText}) {
    return (
        <div className={`group bg-[#01415F] cursor-pointer hover:text-[#EB4D4D] rounded-xl flex  justify-between px-5 py-4 mb-[30px] relative  ${width}`}>
            <div className="">
                <p className="text-4xl uppercase font-bold text-white">{title}</p> 
                <p className="text-white mt-6 w-[220px]">{desc?<p>{desc}</p>:""}</p>
                <p className=" absolute bottom-5 left-5 text-white   group-hover:text-[#EB4D4D]">{btnText} <FontAwesomeIcon icon = {faAngleRight} className="text-[#EB4D4D]"/> </p>
            </div>
            <img src={image} alt="" className="w-[220px] h-[220px]" />
        </div>
    )
}