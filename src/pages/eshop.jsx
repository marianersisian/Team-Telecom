
import Header from "../components/header"
import Footer from "../components/footer"
import ChatBlock from '../components/chats'
import { menuData, footerData } from "../data/privateClientsData"
import {  eshopListsData, mainSlidesData, productsData } from "../data/eshop"
import MainContainer from '../components/mainContainer'
import EshopLists from "../components/eshopLists"
import EshopProducts from "../components/eshopProducts"

export default function Eshop() {
    return (
        <> 
            <Header data = {menuData}/> 
            <MainContainer data = {mainSlidesData}/>
            <EshopLists data = {eshopListsData}/>
            <EshopProducts data = {productsData}/>
            <Footer data = {footerData}/> 
            
        </>
    )
}