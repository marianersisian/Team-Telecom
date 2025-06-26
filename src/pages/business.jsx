
import Header from "../components/header"
import MainContainer from '../components/mainContainer'
import ServiceBlock from '../components/serviceBlock'
import Footer from "../components/footer"
import ChatBlock from '../components/chats'
import MobileTariffs from "../components/mobileTariffs"
import { menuData, footerData } from "../data/privateClientsData"
import { mainSlidesData, businessTariffData, serviceData, virtualBlockData } from "../data/businessData"

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
            <VirtualBlock data = {virtualBlockData}/>
            <Footer data = {footerData}/>
        </>
    )
}