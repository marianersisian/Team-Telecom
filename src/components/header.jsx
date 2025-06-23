import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import Menus from "./menus";
import Language from "./language";
import { NavLink } from "react-router-dom";
import React from "react";

export default function Header({data}) {
    return (
        <div className="text-sm fixed w-full z-[100] top-0 left-0 bg-white">
            <div className="bg-[#01415F]">
                <div className="w-[1260px] h-10 m-auto flex justify-between text-[#EBEBEB] text-sm">
                    
                    <div className="flex w-[325px] h-full items-center">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `px-5 py-[10px] transition duration-[500ms] cursor-pointer ${
                                    isActive ? "bg-[#1F5E78]" : "hover:bg-[#1F5E78]"
                                }`
                            }
                        >
                            Անհատներին
                        </NavLink>

                        <NavLink
                            to="/business"
                            className={({ isActive }) =>
                                `px-3 py-[10px] transition duration-[500ms] cursor-pointer ${
                                    isActive ? "bg-[#1F5E78]" : "hover:bg-[#1F5E78]"
                                }`
                            }
                        >
                            Բիզնես
                        </NavLink>

                        <NavLink
                            to="/eshop"
                            className={({ isActive }) =>
                                `px-5 py-[10px] transition duration-[500ms] cursor-pointer flex items-center ${
                                    isActive ? "bg-[#1F5E78]" : "hover:bg-[#1F5E78]"
                                }`
                            }
                        >
                            <img
                                src="https://www.telecomarmenia.am/img/eshop-icon.svg"
                                alt=""
                                className="mr-[4px]"
                            />
                            E-shop
                        </NavLink>
                    </div>

                    <div className="flex w-[460px] items-center">
                        <div className="cursor-pointer px-4 border-r border-r-[rgb(89,97,105)]">
                            <FontAwesomeIcon icon={faSearch} />
                        </div>

                        <Language language={{ am: "Հայ", ru: "Рус", en: "Eng" }} />

                        <NavLink
                            to="/profile"
                            className={({ isActive }) =>
                                `cursor-pointer border-l border-l-[rgb(89,97,105)] px-5 py-[10px] transition duration-[500ms] flex items-center ${
                                    isActive ? "bg-[#1F5E78]" : "hover:bg-[#1F5E78] hover:ml-[-1px]"
                                }`
                            }
                        >
                            <FontAwesomeIcon className="pr-2" icon={faUser} />
                            Անձնական գրասենյակ
                        </NavLink>
                    </div>
                </div>
            </div>
            <Menus data= {data}/>
        </div>
    );
}
