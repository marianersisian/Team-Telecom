export default function Slides ({title, desc, btnText, src, background}) {
    return (
        <div className=" w-full h-[600px]  mt-[100px] bg-cover bg-center text-2xl font-light  group" style={{backgroundImage: `url(${background})`}}>
            <div className="w-[1260px] flex justify-evenly items-center m-auto">
                <div className="`w-[600px] h-[340px] rounded-md text-white p-12 bg-cover bg-center`">
                    <h1 className="text-4xl font-bold mb-7">{title}</h1>
                    <p className="mb-5">{desc}</p>
                    <div className="rounded-3xl w-[290px] h-[40px] bg-[#F04D4D]  text-center"> <a href="#productInfo" className="font-[500]">{btnText}</a></div>
                </div>
                <div>
                    <img src={src} alt="" />
                </div>
            </div>
        </div>
    )
}



