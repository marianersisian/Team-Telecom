import React, { FC } from "react";

type WhiteToRedButtonProps = {
  btnText: string;
  className?: string;
};

const WhiteToRedButton: FC<WhiteToRedButtonProps> = ({ btnText, className = "" }) => {
  return (
    <div
      className={`text-[#F04D4D] font-bold w-[200px] h-[50px] flex justify-center items-center border-2 border-[#F04D4D] rounded-full hover:bg-[#f04d4d] hover:text-white mt-[40px] ${className}`}
    >
      {btnText}
    </div>
  );
};

export default WhiteToRedButton;
