import React, { FC } from "react";
import Header from "../components/header";
import MainContainer from '../components/mainContainer';
import ServiceBlock from '../components/serviceBlock';
import Footer from "../components/footer";
import MobileTariffs from "../components/mobileTariffs";
import ChangeForm from "../components/changeForm";
import VirtualBlock from "../components/virtualBlock";

import { menuData, footerData } from "../data/privateClientsData";
import { mainSlidesData, businessTariffData, serviceData, virtualBlockData } from "../data/businessData";

import type { MainSlide, BusinessTariff, ServiceItem, VirtualBlockItem } from "../types/businessTypes";
import type { MenuCategory, FooterItem } from "../types/privateClientsTypes";

const Business: FC = () => {
    return (
        <>
            <Header data={menuData} />          
            <MainContainer data={mainSlidesData} /> 
            <MobileTariffs data={businessTariffData} /> 
            <ServiceBlock data={serviceData} />
            <ChangeForm />
            <VirtualBlock data={virtualBlockData} />
            <Footer data={footerData} />
        </>
    );
}

export default Business;
