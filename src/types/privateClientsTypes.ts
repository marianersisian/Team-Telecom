export interface ServiceItem {
  title: string
  desc: string
  btnText: string
  img: string
  width: string
}


export interface MainSlide {
  src: string;
  background: string;
  title: string;
  desc: string;
  btnText: string;
}

export interface NewsItem {
  date: string;
  title: string;
  image: string;
}

export interface FooterItem {
  image: string;
  title: string;
  items: string[];
}

export interface MenuCategory {
  title: string;
  items: string[];
}
