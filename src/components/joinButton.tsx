import React, { FC } from "react";

type Props = {
  btnText?: string; 
};

const JoinButton: FC<Props> = ({ btnText = "Միանալ" }) => {
  return (
    <div className="bg-[#F04D4D] font-bold w-[290px] h-[50px] flex justify-center items-center border-2 border-[#F04D4D] rounded-full hover:bg-[#f04d4d] text-white mt-[40px] cursor-pointer">
      {btnText}
    </div>
  );
};

export default JoinButton;
