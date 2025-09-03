export interface MainSlide {
  src: string
  background: string
  title: string
  desc?: string
  listItem?: string
  btnText: string
}

export interface TariffDetail {
  icon: string
  value: string
  label: string
}

export interface SocialApp {
  icon: string
  name: string
}

export interface BusinessTariff {
  title: string
  price: string
  link: string
  details: TariffDetail[]
  socialApps: SocialApp[]
  socialExtraCount?: number
  btnText: string
}

export interface ServiceItem {
  title: string
  desc: string
  btnText: string
  img: string
  width: string
}

export interface VirtualBlockItem {
  img: string
  desc: string
}
