import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import Menu from "./menu";
import React from "react";

export default function Menus({data}) {
    
    return (
        <>
            <div className="w-[1260px] m-auto h-[60px] flex ">
                <a href="http://localhost:5173/" >
                    <img src="https://www.telecomarmenia.am/img/logo.svg?v=1" alt="" className="w-[110px] h-full" />
                </a>
            
                <Menu data = {data}/>

                <div className=" w-36  group  transform  pl-[84px] hover:pl-0 h-[60px] hover:bg-[#86D2DA] transition duration-800 cursor-pointer relative -right-[80px]">
                    <div className=" w-[60px] h-full bg-[#86D2DA] flex justify-center items-center  transition duration-800" > 
                        <FontAwesomeIcon icon={faCreditCard} className=""/>
                    </div>
                    
                    <p className="-mt-[60px] pt-5 hidden group-hover:block ml-12 bg-[#86D2DA] w-24 h-full transition duration-800`">Վճարումներ</p>
                </div>
            </div>
        </>
    )
}