import React from "react";
import Header from "../header"
import MainContainer from '../mainContainer'
import ServiceBlock from '../serviceBlock'
import FormBlock from "../formBlock"
import NewsBlock from "../newsBlock"
import AppsBlock from "../appsBlock"
import Footer from "../footer"
import ChatBlock from '../chats'
import { menuData, newsData, mainSlidesData, serviceData, footerData } from "../../data/privateClientsData"


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