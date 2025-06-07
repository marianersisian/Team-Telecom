
export default function AppsBlock() {
    return (
        <>   
            <div className="bg-[#86D2DA] w-[1700px] h-[550px] transform -rotate-[23deg] mt-[270px] m-[230px] z-[-1]  absolute">
            </div>
            <div className="flex relative w-screen h-screen overflow-hidden">
                <div className="h-[500px] w-[1260px] m-auto p-7"> 
                        <p className="text-5xl font-bold text-[#2C3843] pb-5">Հավելված My Team</p>
                        <p className="pb-5">Ներբեռնե՛ք My Team-ը iOS և Android համակարգերի համար</p>
                        <p className="pb-5">Կատարե՛ք վճարումներ, ստացեք բոնուսներ, շեյքեք և օգտվեք այլ հնարավորություններից</p>
                        <div className="flex gap-4 pt-7">
                            <img src="https://www.telecomarmenia.am/img/redesign/qr.svg" alt=""  className="w-[80px] h-[80px] mt-3"/>
                            <div>
                                <img src="https://www.telecomarmenia.am/img/redesign/app_store.png" alt=""  className="w-[180px] h-[50px] mb-4"/>
                                <img src="https://www.telecomarmenia.am/img/redesign/google_play.png" alt=""  className="w-[180px] h-[50px]"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="https://www.telecomarmenia.am/img/redesign/app-img.png" alt="" className="w-[400px] [h-225px] mt-[200px] mr-[200px]"/>
                </div>
            </div>
        </>
    )
}
