export default function Language ({language}) {
    return (
        <> 
            {Object.entries(language).map(([key, value]) => (
                <div 
                 key = {key}
                 className="hover:text-[#F04D4D] cursor-pointer px-4  border-r border-r-[rgb(89,97,105)] transition duration-[500ms]">{value}</div>
        ))}
        </>
    )
}