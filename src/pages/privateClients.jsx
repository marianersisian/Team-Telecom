
import Header from "../components/header"
import MainContainer from '../components/mainContainer'
import ServiceBlock from '../components/serviceBlock'
import FormBlock from "../components/formBlock"
import NewsBlock from "../components/newsBlock"
import AppsBlock from "../components/appsBlock"
import Footer from "../components/footer"
import ChatBlock from '../components/chats'
import { menuData, newsData, mainSlidesData, serviceData, footerData } from "../data/privateClientsData"


export default function PrivateClients() {
    return (
        <> 
            <Header data = {menuData}/>
            <MainContainer data = {mainSlidesData}/>
            <ServiceBlock data = {serviceData}/>
            <FormBlock/>
            <NewsBlock data = { newsData}/>
            <AppsBlock/>
            <Footer data = {footerData}/>
        </>
    )
}