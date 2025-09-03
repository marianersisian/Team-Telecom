import React, { FC } from "react";

const MyAccountTable: FC = () => {
    return (
        <div className="ml-[600px] h-screen bg-[url('https://testing.telecomarmenia.am/myaccount/img/bg-image.png')] bg-center bg-cover overflow-y-scroll">
            <p className="w-[250px] h-auto font-bold text-6xl text-[#2C3843] p-10 pl-[200px]">
                Անձնական գրասենյակ
            </p>
            <img src="https://www.telecomarmenia.am/myaccount/img/mobile-devices.png?v=2" alt="" />
            
            <div className="w-[400px] m-auto mt-[80px]">
                <img src="https://www.telecomarmenia.am/myaccount/img/sprite.png?v=32" alt="" className="w-0 h-0" />
            </div>
        </div>    
    );
};

export default MyAccountTable;
