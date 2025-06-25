export default function VirtualBlockItem({img, desc}) {
    return (
        <div className="w-[260px] h-[200px] ">
            <img src={img} alt="" className="m-auto"/>
            <p className="text-center">{desc}</p>
        </div>
    )
}