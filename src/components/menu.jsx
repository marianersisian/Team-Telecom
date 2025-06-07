

export default function Menu ({menuData}) {
    return (
        <>
            {menuData.map((data, index)  => {
                return (
                    <div  
                    key = {index}
                    className="h-full p-4 hover:bg-[#f8f9f9] transition duration-[300ms] relative   group  ml-2">
                        <span>{data.title}</span>
                        <ul className="hidden group-hover:block absolute top-[60px] -ml-4">
                            {data.items.map((item, itemIndex) => {
                                return (
                                    <li 
                                    key = {itemIndex}
                                    className=" w-[200px] h-[50px] bg-[#f8f9f9] border-b cursor-pointer hover:bg-white transition duration-[500ms] p-3 ">{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </>
    )
}