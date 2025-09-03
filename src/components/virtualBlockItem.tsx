import React, { FC } from "react";

type VirtualBlockItemProps = {
    img: string;
    desc: string;
};

const VirtualBlockItem: FC<VirtualBlockItemProps> = ({ img, desc }) => {
    return (
        <div className="w-[260px] h-[200px]">
            <img src={img} alt={desc} className="m-auto" />
            <p className="text-center">{desc}</p>
        </div>
    );
};

export default VirtualBlockItem;
