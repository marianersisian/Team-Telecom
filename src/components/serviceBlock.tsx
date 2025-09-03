import Service from "./service";
import React, { FC } from "react";
import type { ServiceItem } from "../types/businessTypes"; 

type ServiceBlockProps = {
  data: ServiceItem[];
};

const ServiceBlock: FC<ServiceBlockProps> = ({ data }) => {
  return (
    <div className="w-[1260px] m-auto flex flex-wrap gap-x-6 mt-[50px]">
      {data.map((item, index) => (
        <Service
          key={index}
          title={item.title}
          desc={item.desc}
          btnText={item.btnText}
          image={item.img}
          width={item.width}
          background={item.background}
          textColor={item.textColor}
        />
      ))}
    </div>
  );
};

export default ServiceBlock;
