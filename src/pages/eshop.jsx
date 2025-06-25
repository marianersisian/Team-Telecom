
import Header from "../components/header"
import ServiceBlock from '../components/serviceBlock'
import FormBlock from "../components/formBlock"
import NewsBlock from "../components/newsBlock"
import AppsBlock from "../components/appsBlock"
import Footer from "../components/footer"
import ChatBlock from '../components/chats'
import { menuData, footerData } from "../data/privateClientsData"
import {  eshopListsData, mainSlidesData } from "../data/eshop"
import MainContainer from '../components/mainContainer'
import EshopLists from "../components/eshopLists"

export default function Eshop() {
    return (
        <> 
            <Header data = {menuData}/> 
            <MainContainer data = {mainSlidesData}/>
            <EshopLists data = {eshopListsData}/>
            {/* <ServiceBlock data = {serviceData}/> */}
            {/* <FormBlock/> */}
            {/* <NewsBlock data = { newsData}/> */}
            {/* <AppsBlock/> */}
            <Footer data = {footerData}/> 
            
        </>
    )
}