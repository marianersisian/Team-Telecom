import React, { FC, useEffect } from "react";
import MyAccountTable from "../components/myAccountTable";

const MyAccount: FC = () => {
    useEffect(() => {
        document.title = "Team App";
    }, []);

    return (
        <div className="h-screen">
            <div className="w-[600px] overflow-y-scroll bg-[#F5F6F7] fixed left-0 top-0 bottom-0">
                <div className="w-[400px] m-auto mt-[80px]">
                    <img 
                        src="https://www.telecomarmenia.am/myaccount/img/account-logo.png" 
                        alt="Account Logo" 
                        className="w-[180px] h-[70px]" 
                    />
                    <img 
                        src="https://www.telecomarmenia.am/myaccount/img/sprite.png?v=32" 
                        alt="" 
                        className="w-0 h-0" 
                    />
                </div>
            </div>

            <MyAccountTable />
        </div>
    );
};

export default MyAccount;
