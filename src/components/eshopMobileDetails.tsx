import React, { FC } from "react";
import WhiteToRedButton from "./whiteToRedButton";

interface Props {
  title: string;
  mobileNumber: string;
  firstPrice: string;
  discountPrice: string;
}

const EshopMobileDetails: FC<Props> = ({ title, mobileNumber, firstPrice, discountPrice }) => {
  return (
    <div className="group w-[285px] h-[360px] border rounded relative hover:shadow-2xl hover:scale-[1.1] transition duration-500 mt-[50px] ml-12">
      <div className="bg-[#00425F] font-bold text-3xl text-white rounded-t h-[100px] w-full pt-5 text-center ">
        {title}
      </div>

      <div className="text-[#2c3843] text-3xl font-bold text-center w-[240px] h-[80px] m-auto pt-5 border-b">
        {mobileNumber}
      </div>

      <div className="font-bold p-5">
        <div className="relative">
          <div className="text-[#666e75] text-[13px]">{firstPrice}</div>
          <div className="w-[60px] h-[3px] translate rotate-[10deg] bg-[#f04d4d] absolute top-[9px] left-[-2px] "></div>
        </div>

        <div className="text-[25px] text-[#32404d]">{discountPrice}</div>

        <div className="relative left-[202px] bottom-[60px]">
          <div className="w-[66px] h-[60px] bg-no-repeat bg-[url('https://www.telecomarmenia.am/eshop/img/sprite.png?v=25')] bg-[position:-235px_-280px]"></div>
          <div className="rotate-[-10deg] absolute top-3 left-4 text-white">20%</div>
        </div>
      </div>

      <div className="absolute bottom-3 left-[40px]">
        <WhiteToRedButton
          btnText="Ավելացնել զամբյուղ"
          className="transition duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:border-none"
        />
      </div>
    </div>
  );
};

export default EshopMobileDetails;
