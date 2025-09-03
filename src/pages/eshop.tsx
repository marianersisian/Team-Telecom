import React, { FC } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import MainContainer from "../components/mainContainer";
import EshopLists from "../components/eshopLists";
import EshopProducts from "../components/eshopProducts";
import EshopMobile from "../components/eshopMobile";
import ServiceBlock from "../components/serviceBlock";

import { menuData, footerData } from "../data/privateClientsData";
import { mainSlidesData, eshopListsData, productsData, mobileNumber, serviceData } from "../data/eshop";

import type { MainSlide, ServiceItem } from "../types/businessTypes";
import type { MenuCategory, FooterItem } from "../types/privateClientsTypes";
import type { EshopListItem, ProductItem, MobileNumberItem } from "../types/eshopTypes";

const Eshop: FC = () => {
    return (
        <>
            <Header data={menuData} />
            <MainContainer data={mainSlidesData} />
            <EshopLists data={eshopListsData} />
            <EshopProducts data={productsData} />
            <EshopMobile data={mobileNumber} />
            <ServiceBlock data={serviceData} />
            <Footer data={footerData} />
        </>
    );
};

export default Eshop;
