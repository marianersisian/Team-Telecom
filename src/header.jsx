import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faSearch, faUser, faCreditCard } from "@fortawesome/free-solid-svg-icons";


function Header() {
    return (
        <div className="text-sm fixed w-full z-[100] top-0 left-0 bg-white">
            <div className = "bg-[#01415F]">
                <div  className = "w-[95%] h-10 m-auto flex justify-between text-[#EBEBEB] text-sm">

                    <div className="flex w-[325px] h-full items-center">
                        <div className="hover:bg-[#1F5E78] px-5 py-[10px] transition duration-[500ms] cursor-pointer">Անհատներին</div>
                        <div className="hover:bg-[#1F5E78] px-5 py-[10px] transition duration-[500ms] cursor-pointer">Բիզնես</div>
                        <div className="hover:bg-[#1F5E78] px-5 py-[10px] transition duration-[500ms] cursor-pointer"><FontAwesomeIcon icon = {faShoppingBasket} className="pr-1"/>E-shop</div>
                    </div>
                
                    <div className="flex w-[460px]  items-center">
                        <div className=" cursor-pointer px-4  border-r border-r-[rgb(89,97,105)]"><FontAwesomeIcon icon={faSearch}/></div>
                        <div className="hover:text-[#F04D4D] cursor-pointer px-4  border-r border-r-[rgb(89,97,105)] transition duration-[500ms]">Հայ</div>
                        <div className="hover:text-[#F04D4D] cursor-pointer px-4 border-r border-r-[rgb(89,97,105)] transition duration-[500ms]">Рус</div>
                        <div className="hover:text-[#F04D4D] cursor-pointer px-4  border-r border-r-[rgb(89,97,105)] transition duration-[500ms]">Eng</div>
                        <div className="cursor-pointer hover:bg-[#1F5E78] hover:border-l border-l-[rgb(89,97,105)] px-5 py-[10px] transition duration-[500ms] "><FontAwesomeIcon className="px-2" icon= {faUser} />Անձնական գրասենյակ</div>
                    </div>
                </div>
            </div>
            <div className="w-[93%] m-auto h-[60px] flex ">
                <div>
                    <a href="http://localhost:5173/">
                        <img src="./src/assets/mainLogo.png" alt="" className="w-[110px]" />
                    </a>
                </div>

                <div className="h-full p-4 hover:bg-[#f8f9f9] transition duration-[300ms] relative group ">
                    Սակագներ
                    <ul className="hidden group-hover:block absolute mt-4 -ml-4">
                        <li className=" w-50 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">Բջջային կապ</li>
                        <li className=" w-50 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">Ինտերնետ և TV - ԿՈՍՄՈ</li>
                        <li className=" w-50 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">Ինտերնետ և TV - ԿՈՄԲՈ</li>
                        <li className=" w-50 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">Ֆիքսված հեռախոսակապ</li>
                    </ul>
                </div>

                <div className="h-full p-4 w-auto hover:bg-[#f8f9f9] transition duration-[500ms] relative group">
                    Ինտերնետ
                    <ul className="hidden group-hover:block absolute -ml-4 mt-4">
                        <li className=" w-50 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">Սմարթֆոնի համար</li>
                        <li className=" w-50 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">Տան համար - ԿՈՍՄՈ</li>
                        <li className=" w-50 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">Տան համար - ԿՈՄԲՈ</li>
                        <li className=" w-50 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">Համակարգչի/պլանշետի համար</li>
                        <li className=" w-50 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">Team 4G</li>
                    </ul>
                </div>

                <div className="h-full p-4 hover:bg-[#f8f9f9] transition duration-[500ms] relative group">
                    Ծառայություններ
                    <ul className="hidden group-hover:block absolute -ml-4 mt-4">
                        <li className=" w-50 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">TeamTV</li>
                        <li className=" w-50 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">Վճարում և համալրում</li>
                        <li className=" w-50 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">Զվարճանք</li>
                        <li className=" w-50 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">Զանգեր և անվտանգություն</li>
                        <li className=" w-50 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">Ֆիքսված հեռախոսակապ</li>
                    </ul>
                </div>

                <div className="h-full p-4 w-auto hover:bg-[#f8f9f9] transition duration-[500ms] relative group">
                    Ռոումինգ
                    <ul className="hidden group-hover:block absolute -ml-4 mt-4">
                        <li className=" w-50 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">Ռոումինգ</li>
                        <li className=" w-50 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">Միջազգային կապ</li>
                        <li className=" w-50 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">Օգտակար տեղեկատվություն</li>
                        <li className=" w-50 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">Ծառայություններ</li>
                    </ul>
                </div>

                <div className="h-full p-4 w-auto hover:bg-[#f8f9f9] transition duration-[500ms] relative group">
                    Առցանց խանութ
                    <ul className="hidden group-hover:block absolute -ml-4 mt-4">
                        <li className=" w-50 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">E-shop</li>
                        <li className=" w-50 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">Առցանց ապառիկ</li>
                        <li className=" w-50 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">Բաժանորդագրություն</li>
                    </ul>
                </div>

                <div className="h-full p-4 w-auto hover:bg-[#f8f9f9] transition duration-[500ms] relative group">
                    Առաջարկներ
                    <ul className="hidden group-hover:block absolute -ml-4 mt-4">
                        <li className=" w-52 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">Շեյքի՛ր և Շահի՛ր</li>
                        <li className=" w-52 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">Team Բոնուս</li>
                        <li className=" w-52 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">Ակցիաներ</li>
                        <li className=" w-52 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">MobiBattle</li>
                        <li className=" w-52 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">GeForce Games</li>
                    </ul>
                </div>

                <div className="h-full  p-4 w-auto hover:bg-[#f8f9f9] transition duration-[500ms] relative group">
                    Օգնություն
                    <ul className="hidden group-hover:block absolute -ml-4 mt-4">
                        <li className=" w-50 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">Հաճախ տրվող հարցեր</li>
                        <li className=" w-50 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">Սարքերի կարգավորումներ</li>
                        <li className=" w-50 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">Բաժանորդային սպասարկում</li>
                        <li className=" w-50 bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-2">USSD հրահանգներ և օգտակար համարներ</li>
                    </ul>
                </div>

                <div className=" w-36 ml-40 group  transform  pl-[84px] hover:pl-0 h-[60px] hover:bg-[#86D2DA] transition duration-800">
                    <div className=" w-[60px] h-full bg-[#86D2DA] flex justify-center items-center  transition duration-800" > 
                        <FontAwesomeIcon icon={faCreditCard} className=""/>
                    </div>
                    
                    <p className="-mt-[60px] pt-5 hidden group-hover:block ml-12 bg-[#86D2DA] w-24 h-full transition duration-800`">Վճարումներ</p>
                </div>
            </div>
        </div>
    )
}

export default Header;  