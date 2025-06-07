import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import Menu from "./menu";

export default function Menus() {
    const menuData = [
        {
            title: "Սակագներ",
            items: [
            "Բջջային կապ",
            "Ինտերնետ և TV - ԿՈՍՄՈ",
            "Ինտերնետ և TV - ԿՈՄԲՈ",
            "Ֆիքսված հեռախոսակապ"
            ]
        },
        {
            title: "Ինտերնետ",
            items: [
            "Սմարթֆոնի համար",
            "Տան համար - ԿՈՍՄՈ",
            "Տան համար - ԿՈՄԲՈ",
            "Համակարգչի/պլանշետի համար",
            "Team 4G"
            ]
        },
        {
            title: "Ծառայություններ",
            items: [
            "TeamTV",
            "Վճարում և համալրում",
            "Զվարճանք",
            "Զանգեր և անվտանգություն",
            "Ֆիքսված հեռախոսակապ"
            ]
        },
        {
            title: "Ռոումինգ",
            items: [
            "Ռոումինգ",
            "Միջազգային կապ",
            "Օգտակար տեղեկատվություն",
            "Ծառայություններ"
            ]
        },
        {
            title: "Առցանց խանութ",
            items: [
            "E-shop",
            "Առցանց ապառիկ",
            "Բաժանորդագրություն"
            ]
        },
        {
            title: "Առաջարկներ",
            items: [
            "Շեյքի՛ր և Շահի՛ր",
            "Team Բոնուս",
            "Ակցիաներ",
            "MobiBattle",
            "GeForce Games"
            ]
        },
        {
            title: "Օգնություն",
            items: [
            "Հաճախ տրվող հարցեր",
            "Սարքերի կարգավորումներ",
            "Բաժանորդային սպասարկում",
            "USSD հրահանգներ և օգտակար համարներ"
            ]
        }
];
    return (
        <>
            <div className="w-[1260px] m-auto h-[60px] flex ">
                <a href="http://localhost:5173/" >
                    <img src="https://www.telecomarmenia.am/img/logo.svg?v=1" alt="" className="w-[110px] h-full" />
                </a>
            
                <Menu menuData = {menuData}/>

                <div className=" w-36  group  transform  pl-[84px] hover:pl-0 h-[60px] hover:bg-[#86D2DA] transition duration-800 cursor-pointer relative -right-[80px]">
                    <div className=" w-[60px] h-full bg-[#86D2DA] flex justify-center items-center  transition duration-800" > 
                        <FontAwesomeIcon icon={faCreditCard} className=""/>
                    </div>
                    
                    <p className="-mt-[60px] pt-5 hidden group-hover:block ml-12 bg-[#86D2DA] w-24 h-full transition duration-800`">Վճարումներ</p>
                </div>
            </div>
        </>
    )
}