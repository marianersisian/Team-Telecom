import React, { FC } from "react";

type WhiteDetailsButtonProps = {
  btnText: string;
};

const WhiteDetailsButton: FC<WhiteDetailsButtonProps> = ({ btnText }) => {
  return (
    <div className="rounded-3xl w-[290px] h-[40px] bg-white text-[#F04D4D] text-center font-bold pt-2">
      {btnText}
    </div>
  );
};

export default WhiteDetailsButton;
