import Service from "./service";
import serviceData from "../data/serviceData";

export default function ServiceBlock() {
  return (
    <div className="w-[1260px] m-auto flex flex-wrap gap-x-6  mt-[50px]">
      {serviceData.map((data, index) => (
        <Service
          key={index}
          title={data.title}
          image={data.img}
          width={data.width}
        />
      ))}
    </div>
  );
}
