import React, { FC } from "react";
import EshopList from "./eshopList";
import type { EshopListItem } from "../types/eshopTypes";

interface EshopListsProps {
  data?: readonly EshopListItem[]; // optional, պաշտպանություն runtime-ի համար
}

const EshopLists: FC<EshopListsProps> = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="w-[1260px] h-[120px] m-auto flex justify-evenly my-16 gap-x-12">
      {data.map((item, index) => (
        <EshopList key={index} title={item.title} img={item.img} />
      ))}
    </div>
  );
};

export default EshopLists;
