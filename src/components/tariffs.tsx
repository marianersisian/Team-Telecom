import React, { FC } from "react";
import WhiteToRedButton from "./whiteToRedButton";

export type TariffDetail = {
    icon: string;
    value: string;
    label: string;
};

export type SocialApp = {
    icon: string;
    name: string;
};

export type TariffItem = {
    title: string;
    price: string;
    details: TariffDetail[];
    socialApps: SocialApp[];
    btnText: string;
};

type TariffsProps = {
    data: TariffItem;
};

const Tariffs: FC<TariffsProps> = ({ data }) => {
    return (
        <div className="w-[270px] h-[420px] flex flex-col relative border hover:bg-white pb-[30px] group rounded-md hover:scale-[1.1] transition duration-500 mt-5 bg-[#F3F4F5] ">
            <div className="bg-[#01415F] w-full h-[20px] rounded-t-md group-hover:rounded-t-md transition duration-500"></div>
            <div className="text-center h-[100px] w-full flex flex-col justify-center items-center pb-6 border-b group-hover:text-white group-hover:bg-[#01415F] pt-[25px] border-t-none">
                <p className="text-center font-bold text-3xl">{data.title}</p>
                <p className="text-center font-bold text-4xl">{data.price}</p>
            </div>
            <div className="text-center w-full h-[30px]">
                {data.details.map((item, i) => (
                    <span key={i} className="block text-center w-full h-[40px] border-b pt-2">
                        <img src={item.icon} alt="" />
                        <span className="text-center">{item.value}</span> {item.label}
                    </span>
                ))}
            </div>
            <div className="flex justify-center gap-1 w-full h-[45px] mt-[140px]">
                {data.socialApps.map((app, j) => (
                    <div key={j} className="text-center">
                        <img src={app.icon} alt={app.name} />
                    </div>
                ))}
            </div>
            <div className="h-[50px] absolute bottom-[50px] left-[30px] flex justify-center">
                <WhiteToRedButton btnText={data.btnText} />
            </div>
        </div>
    );
};

export default Tariffs;
