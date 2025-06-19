import Service from "./service";

export default function ServiceBlock({data}) {
  return (
    <div className="w-[1260px] m-auto flex flex-wrap gap-x-6  mt-[50px]">
      {data.map((item, index) => (
        <Service
          key={index}
          title={item.title}
          decs= {item.decs}
          btnText= {item.btnText}
          image={item.img}
          width={item.width}
        />
      ))}
    </div>
  );
}
