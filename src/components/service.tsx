import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React, { FC } from "react";

type ServiceProps = {
    title: string;
    image: string;
    btnText: string;
    width?: string;
    desc?: string;
    textColor?: string;
    background?: string;
};

const Service: FC<ServiceProps> = ({ background, textColor, title, image, width = '', desc, btnText }) => {
    return (
        <div
            className={`group cursor-pointer text-white rounded-xl flex justify-between px-5 py-4 mb-[30px] bg-[#01415F] relative ${width}`}
            style={{ backgroundColor: background, color: textColor }}
        >
            <div>
                <p className="text-4xl uppercase font-bold text-white">{title}</p>
                {desc && <p className="mt-6 w-[220px]">{desc}</p>}
                <p className="absolute bottom-5 left-5 group-hover:text-[#EB4D4D]">
                    {btnText} <FontAwesomeIcon icon={faAngleRight} className="text-[#EB4D4D]" />
                </p>
            </div>
            <img src={image} alt={title} className="w-[220px] h-[220px]" />
        </div>
    );
};

export default Service;
