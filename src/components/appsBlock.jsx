import React from "react";

export default function AppsBlock() {
    return (
        <>  
            <div className="w-[1260px] h-[500px] relative m-auto ">     
                <div className="w-0 h-0 border-l-[1200px] border-b-[450px]  border-b-[#86D2DA] z-[-1] border-l-transparent absolute right-[-44px] bottom-0"></div>
                <div className="flex">
                    <div className="h-[500px] w-[1260px] m-auto p-7 "> 
                            <p className="text-5xl font-bold text-[#2C3843] pb-5">Հավելված My Team</p>
                            <p className="pb-5">Ներբեռնե՛ք My Team-ը iOS և Android համակարգերի համար</p>
                            <p className="pb-5">Կատարե՛ք վճարումներ, ստացեք բոնուսներ, շեյքեք և օգտվեք այլ հնարավորություններից</p>
                            <div className="flex gap-4 pt-7">
                                <img src="https://www.telecomarmenia.am/img/redesign/qr.svg" alt=""  className="w-[100px] h-[100px] mt-3"/>
                                <div>
                                    <img src="https://www.telecomarmenia.am/img/redesign/app_store.png" alt=""  className="w-[180px] h-[50px] mb-4"/>
                                    <img src="https://www.telecomarmenia.am/img/redesign/google_play.png" alt=""  className="w-[180px] h-[50px]"/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="https://www.telecomarmenia.am/img/redesign/app-img.png" alt="" className="w-[400px] [h-225px] mt-[88px] mr-[200px]"/>
                    </div>
                </div>
            </div>
        </>
    )
}
