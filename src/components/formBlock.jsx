import React from "react";
import RedButton from "./redButton";
export default function FormBlock() {
    return (
        <div id = "productInfo" className="w-full h-[260px] bg-[#022739]  text-center text-white p-5 my-7">
            <p className="font-bold text-6xl mb-12">Դարձեք Team բաժանորդ</p>
            <p className="mb-12 text-lg">Միացե՛ք մեզ ձեր համարով և օգտվեք Team-ի բոլոր առավելություններից:</p>
            <div className="">
                <RedButton btnText = {"Միանալ"} />
            </div>
        </div>
    )
}