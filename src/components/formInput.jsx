export default function FormInput() {
    return (
        <div className="flex gap-9">  
            <div className="flex gap-6 flex-col">
                <div>
                    <p className="text-xs pl-3 pb-2">Տեղափոխվող համար (0XXYYYYYY ֆորմատով)*</p>
                    <input type="number" placeholder="0" className="w-[420px] h-[45px] rounded-3xl text-black outline-none p-3  appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"/>
                </div>
                <div>
                    <p className="text-xs pl-3 pb-2">Կազմակերպություն*</p>
                    <input type="text" className="w-[420px] h-[45px] rounded-3xl text-black p-3 outline-none"/>
                </div>
            </div>  
            <div className="flex gap-6 flex-col">
                <div>
                    <p className="text-xs pl-3 pb-2">Անուն Ազգանուն*</p>
                    <input type="text"  className="w-[420px] h-[45px] rounded-3xl text-black p-3 outline-none"/>
                </div>
                <div>
                    <p className="text-xs pl-3 pb-2">Կոնտակտային համար*</p>
                    <input type="number" placeholder="0" className="w-[420px] h-[45px] rounded-3xl text-black appearance-none  p-3 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none outline-none"/>
                </div>
            </div>
        </div>
    )
}