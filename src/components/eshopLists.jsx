import EshopList from "./eshopList"
export default function EshopLists({data}) {
    return(
        <div className="w-[1260px] h-[120px] m-auto flex jusify-evenly my-16 gap-x-12 "> 
            {data.map((item, index) => (
                <EshopList key={index} title = {item.title} img = {item.img}/>
            ))}
        </div>
    )
}