import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faSearch, faUser, faCreditCard } from "@fortawesome/free-solid-svg-icons";


function Header() {
    return (
        <div className="text-sm">
            <div className = "w-full bg-[#01415F]">
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
        </div>
    )
}

export default Header;  