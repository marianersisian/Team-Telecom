
export default function EshopList ({img, title}) {
    return (
        <div className="flex justify-center items-center bg-[#f5f6f7] hover:shadow-xl cursor-pointer w-[270px] h-[110px] gap-4 border rounded transition duration-500">
            <img src={img} alt="" className="w-[50px] h-[50px]" />
            <h1>{title}</h1>
        </div>
    )
}