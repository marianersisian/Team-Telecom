
import Header from "../components/header"
import MainContainer from '../components/mainContainer'
import ServiceBlock from '../components/serviceBlock'
import FormBlock from "../components/formBlock"
import NewsBlock from "../components/newsBlock"
import AppsBlock from "../components/appsBlock"
import Footer from "../components/footer"
import ChatBlock from '../components/chats'
import MobileTariffs from "../components/mobileTariffs"
import { menuData, footerData } from "../data/privateClientsData"
import { mainSlidesData, businessTariffData, serviceData } from "../data/businessData"

import ChangeForm from "../components/changeForm"
import VirtualBlock from "../components/virtualBlock"

export default function Business() {
    return (
        <> 
            <Header data = {menuData}/>
            <MainContainer data = {mainSlidesData}/>
            <MobileTariffs data = {businessTariffData}/>
            <ServiceBlock data = {serviceData}/>
            <ChangeForm />
            <VirtualBlock/>
            <Footer data = {footerData}/>
        </>
    )
}