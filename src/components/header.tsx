import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import Menus from "./menus";
import Language from "./language";
import { NavLink } from "react-router-dom";
import React, { FC, useState } from "react";
import { MenuCategory } from "../types/privateClientsTypes"; 

interface HeaderProps {
    data: MenuCategory[];
}

const Header: FC<HeaderProps> = ({ data }) => {
    const [showSearch, setShowSearch] = useState(false);

    const handleClick = () => {
        window.open("/myaccount", "_blank");
    };

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
                        <form className="relative">
                            <div
                                className="cursor-pointer px-4 border-r border-r-[rgb(89,97,105)]"
                                onClick={() => setShowSearch(!showSearch)}
                            >
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                            {showSearch && (
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Որոնել..."
                                        className="absolute top-[2px] right-[50px]  w-[230px] h-5 rounded-3xl px-2 py-1 text-black shadow-md outline-none border-2 border-[#F04D4D]"
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-[60px] top-[3px] cursor-pointer text-[#01415F]"
                                    >
                                        <FontAwesomeIcon icon={faSearch} />
                                    </button>
                                </div>
                            )}
                        </form>

                        <Language language={{ am: "Հայ", ru: "Рус", en: "Eng" }} />

                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `cursor-pointer border-l border-l-[rgb(89,97,105)] px-5 py-[10px] transition duration-[500ms] flex items-center ${
                                    isActive ? "bg-[#1F5E78]" : "hover:bg-[#1F5E78] hover:ml-[-1px]"
                                }`
                            }
                        >
                            <FontAwesomeIcon className="pr-2" icon={faUser} />
                            <div onClick={handleClick} className="cursor-pointer">
                                Անձնական գրասենյակ  
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <Menus data={data} />
        </div>
    );
};

export default Header;
