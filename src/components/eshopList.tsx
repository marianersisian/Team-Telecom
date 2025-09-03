import React, { FC } from "react";

interface EshopListProps {
  img: string;
  title: string;
}

const EshopList: FC<EshopListProps> = ({ img, title }) => {
  return (
    <div className="flex justify-center items-center bg-[#f5f6f7] hover:shadow-xl cursor-pointer w-[270px] h-[110px] gap-4 border rounded transition duration-500">
      <img src={img} alt={title} className="w-[50px] h-[50px]" />
      <h1>{title}</h1>
    </div>
  );
};

export default EshopList;
