import React, { FC } from "react";
import FormInput from "./formInput";
import JoinButton from "./joinButton";

const ChangeForm: FC = () => {
  return (
    <>
      <div className="w-full h-[640px] bg-[#0A2434]">
        <div className="text-white w-[1260px] h-full m-auto flex justify-center flex-col items-center gap-7">
          <div className="font-bold text-5xl uppercase w-[690px] h-[50px] text-center">
            Տեղափոխվե՛ք Team Ձեր համարով
          </div>
          <div className="w-[690px] h-[120px] text-center mt-10 -mb-10">
            Դարձե՛ք Team բաժանորդ, օգտվեք ցանցի առավելություններից` պահելով Ձեր
            բջջային հեռախոսի համարը:
          </div>
          <FormInput />
          <JoinButton />
        </div>
      </div>
    </>
  );
};

export default ChangeForm;
