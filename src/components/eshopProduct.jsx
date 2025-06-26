import EshopProductDetails from "./eshopProductDetails"
import WhiteToRedButton from "./whiteToRedButton"
export default function EshopProduct({title, gb, details}) {
    return (
        <div className="w-[280px] h-[650px] border hover:shadow-2xl rounded-md flex flex-col justify-center items-start pl-7 gap-y-3 hover:scale-[1.1] mt-[50px] transition duration-500 ml-[30px]">
            <div className="flex gap-2 ">
                <p className="">{title}</p>
                <b>{gb}</b>
            </div>
            {details}
            <div className="">
                <WhiteToRedButton btnText={"Ավելացնել զամբյուղ"} />
            </div>
        </div>
    )
}