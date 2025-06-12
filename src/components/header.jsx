import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import Menus from "./menus"
import Language from "./language";


export default function Header() {
    return (
        <div className="text-sm fixed w-full z-[100] top-0 left-0 bg-white">
            <div className = "bg-[#01415F]">
                <div  className = "w-[1260px] h-10 m-auto flex justify-between text-[#EBEBEB] text-sm">

                    <div className="flex w-[325px] h-full items-center">
                        <div className="hover:bg-[#1F5E78] px-5 py-[10px] transition duration-[500ms] cursor-pointer">Անհատներին</div>
                        <div className="hover:bg-[#1F5E78] px-5 py-[10px] transition duration-[500ms] cursor-pointer">Բիզնես</div>
                        <div className="hover:bg-[#1F5E78] px-5 py-[10px] transition duration-[500ms] cursor-pointer"><FontAwesomeIcon icon = {faShoppingBasket} className="pr-1"/>E-shop</div>
                    </div>
                
                    
                    <div className="flex w-[460px]  items-center">
                        <div className=" cursor-pointer px-4  border-r border-r-[rgb(89,97,105)]"><FontAwesomeIcon icon={faSearch}/></div>
                        
                        <Language language  = {{
                        am: "Հայ", ru: "Рус", en: "Eng"}} />
            
                        <div className="cursor-pointer hover:bg-[#1F5E78] hover:border-l hover:ml-[-1px] border-l-[rgb(89,97,105)] px-5 py-[10px] transition duration-[500ms] "><FontAwesomeIcon className="pr-2" icon= {faUser} />Անձնական գրասենյակ</div>
                    </div>
                </div>
            </div>
            <Menus/>
        </div>
    )
}

