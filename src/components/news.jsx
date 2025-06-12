export default function News({image, date, title}) {
    return (
        <>                
            <div className="w-[400px] h-[400px] ">
                <img src={image} alt="" className="w-full h-[73%] rounded-t-2xl" />
                <div className="bg-[#F8F9F9] border h-[27%] rounded-b-2xl">
                    <span className="text-xs p-4 pt-[15px] text-gray-600">{date}</span>
                    <p className="px-4">{title}</p>
                </div>
            </div>
        </>
    )
}