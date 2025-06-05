import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight} from "@fortawesome/free-solid-svg-icons";

function ServiceBlock() {
    return (
        <div className="w-full text-white">
            <div className=" w-[95%] m-auto flex justify-between h-[280px] my-5">
                <div className="bg-[#01415F] cursor-pointer hover:text-[#EB4D4D] w-[49%] rounded-xl flex justify-between p-4">
                    <div className="p-7">
                        <p className="text-4xl uppercase font-bold text-white ">Բջջային կապ</p>
                        <p className="mt-[100px] ">Ավելին <FontAwesomeIcon icon = {faAngleRight} className="text-[#EB4D4D]"/> </p>
                    </div>
                    <img src="https://www.telecomarmenia.am/images/promo/1/16509682370213.png" alt="" className="w-[260px] h-[260px]" />
                </div>
                <div className="bg-[#01415F] cursor-pointer hover:text-[#EB4D4D] w-[49%] rounded-xl flex justify-between p-4">
                    <div className="p-7">
                        <p className="text-4xl uppercase font-bold text-white absolute">Ֆիքսված կապ</p>
                        <p className="mt-[140px] ">Ավելին <FontAwesomeIcon icon = {faAngleRight} className="text-[#EB4D4D]"/></p>
                    </div>
                    <img src="https://www.telecomarmenia.am/images/promo/1/1650969068409.png" alt="" className="w-[260px] h-[260px]"/>
                </div>
            </div>
            <div className="w-[95%] m-auto flex justify-between h-[280px]">
                <div className="bg-[#01415F] cursor-pointer hover:text-[#EB4D4D] w-[54%] rounded-xl flex justify-between p-4">
                    <div className="p-7">
                        <p className="text-4xl uppercase text-white font-bold">Հավելվածներ</p>
                        <p className="mt-[100px] ">Ավելին <FontAwesomeIcon icon = {faAngleRight} className="text-[#EB4D4D]"/> </p>
                    </div>
                    <img src="https://www.telecomarmenia.am/images/promo/1/16509690498367.png" alt="" className="w-[260px] h-[260px]"/>
                </div>
                <div className="bg-[#01415F] cursor-pointer hover:text-[#EB4D4D] w-[44%] rounded-xl flex justify-between p-4">
                    <div className="p-7">
                        <p className="text-4xl uppercase font-bold  text-white absolute">Ինտերնետ և TV</p>
                        <p className="mt-[140px] ">Ավելին <FontAwesomeIcon icon = {faAngleRight} className="text-[#EB4D4D]"/></p>
                    </div>
                    <img src="https://www.telecomarmenia.am/images/promo/1/16510462295535.png" alt="" className="w-[260px] h-[260px]"/>
                </div>
            </div>
        </div>
    )
}

export default ServiceBlock;