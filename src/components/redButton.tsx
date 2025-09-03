import React, { FC } from "react";

type RedButtonProps = {
    btnText: string;
};

const RedButton: FC<RedButtonProps> = ({ btnText }) => {
    return (
        <div className="w-[150px] font-bold text-lg rounded-3xl bg-[#F04D4D] h-10 flex justify-center items-center cursor-pointer m-auto">
            {btnText}
        </div>
    );
};

export default RedButton;
