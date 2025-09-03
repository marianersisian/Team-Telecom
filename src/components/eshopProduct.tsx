import React, { FC } from "react";
import WhiteToRedButton from "./whiteToRedButton";

interface Props {
  title: string;
  gb: string;
  img: string;
  price: string;
  monthlyPrice: string;
}

const EshopProduct: FC<Props> = ({ title, gb, img, price, monthlyPrice }) => {
  return (
    <div className="w-[290px] h-[650px] border hover:shadow-2xl rounded-md flex flex-col justify-center items-start pl-7 gap-y-3 hover:scale-[1.1] mt-[50px] transition duration-500 ml-[30px] group">
      <div className="flex gap-2 ">
        <p>{title}</p>
        <b>{gb}</b>
      </div>

      <div className="flex gap-2">
        <input type="checkbox" />
        <p>Համեմատել</p>
      </div>

      <div>
        <img src={img} alt={title} />
      </div>

      <div className="text-[#666e75] w-[90%] h-[30px] border-b">
        <b>{price}</b>
      </div>

      <div>
        <p className="text-[#666e75]">Սկսած</p>
        <b className="text-2xl text-[#2c3843]">{monthlyPrice}</b>
      </div>

      <div className="ml-3">
        <WhiteToRedButton
          btnText="Ավելացնել զամբյուղ"
          className="transition duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:border-none"
        />
      </div>
    </div>
  );
};

export default EshopProduct;
