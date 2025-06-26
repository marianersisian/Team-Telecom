export default function EshopProductDetails({img, price, monthlyPrice}){
    return (
        <>
            <div className="flex gap-2">
                <input type="checkbox" />
                <p>Համեմատել</p>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
            <div >
                <b>{price}</b>
            </div>
            <div>
                <p>Սկսած</p>
                <b>{monthlyPrice}</b>
            </div>
        </>
    )
}