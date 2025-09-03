import React, { FC } from "react";
import Header from "../components/header";
import MainContainer from "../components/mainContainer";
import ServiceBlock from "../components/serviceBlock";
import FormBlock from "../components/formBlock";
import NewsBlock from "../components/newsBlock";
import AppsBlock from "../components/appsBlock";
import Footer from "../components/footer";
import ChatBlock from "../components/chats";

import { menuData, newsData, mainSlidesData, serviceData, footerData } from "../data/privateClientsData";
import { MenuCategory, NewsItem, MainSlide, ServiceItem, FooterItem } from "../types/privateClientsTypes";

const PrivateClients: FC = () => {
  return (
    <> 
      <Header data={menuData as MenuCategory[]} />
      <MainContainer data={mainSlidesData as MainSlide[]} />
      <ServiceBlock data={serviceData as ServiceItem[]} />
      <FormBlock />
      <NewsBlock data={newsData as NewsItem[]} />
      <AppsBlock />
      <Footer data={footerData as FooterItem[]} />
    </>
  );
};

export default PrivateClients;
