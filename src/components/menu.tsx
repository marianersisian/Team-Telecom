import React, { FC } from "react";

interface MenuItem {
  title: string;
  items: string[];
}

interface MenuProps {
  data: MenuItem[];
}

const Menu: FC<MenuProps> = ({ data }) => {
  return (
    <>
      {data.map((elem, index) => (
        <div
          key={index}
          className="h-full p-4 hover:bg-[#f8f9f9] transition duration-[700ms] relative group ml-2"
        >
          <span>{elem.title}</span>
          <ul className="hidden group-hover:block absolute top-[60px] -ml-4">
            {elem.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="w-[200px] h-[50px] bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-3"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Menu;
