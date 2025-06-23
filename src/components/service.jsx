import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Service ({title, image, width}) {
    return (
        <div className={`bg-[#01415F] cursor-pointer hover:text-[#EB4D4D] rounded-xl flex justify-between px-5 py-4 mb-[30px] relative  ${width}`}>
            <p className="text-4xl uppercase font-bold text-white">{title}</p>  
            <p className=" absolute mt-[150px]">Ավելին <FontAwesomeIcon icon = {faAngleRight} className="text-[#EB4D4D]"/> </p>
            <img src={image} alt="" className="w-[220px] h-[220px]" />
        </div>
    )
}