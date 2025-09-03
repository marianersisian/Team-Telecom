import React, { FC } from "react";
import VirtualBlockItem from "./virtualBlockItem";
import WhiteDetailsButton from "./whiteDetailsButton";

export type VirtualBlockItemType = {
    img: string;
    desc: string;
};

type VirtualBlockProps = {
    data: VirtualBlockItemType[];
};

const VirtualBlock: FC<VirtualBlockProps> = ({ data }) => {
    return (
        <div className="w-full h-[570px] bg-[#0A2434] text-white relative flex flex-col gap-16 justify-center items-center">
            <div className="bg-[url(https://www.telecomarmenia.am/img/pattern-b2b.png)] w-screen bg-no-repeat h-[330px] m-auto absolute bottom-0"></div>
            <div className="font-bold text-6xl">Վիրտուալ ԱՀԿ</div>
            <div className="flex">
                {data.map((item, index) => (
                    <VirtualBlockItem img={item.img} desc={item.desc} key={index} />
                ))}
            </div>
            <WhiteDetailsButton btnText={"Մանրամասներ"} />
        </div>
    );
};

export default VirtualBlock;
