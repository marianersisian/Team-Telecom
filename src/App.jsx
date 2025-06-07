import './App.css'
import Header from "./components/header"
import MainContainer from './mainContainer'
import ServiceBlock from "./serviceBlock"
import FormBlock from "./components/formBlock"
import NewsBlock from "./components/newsBlock"
import AppsBlock from "./components/appsBlock"
import Footer from "./components/footer"

export default function App() {

  return (
    <>
      <Header/>
      <MainContainer/>
      <ServiceBlock/>
      <FormBlock/>
      <NewsBlock/>
      <AppsBlock/>
      <Footer/>
    </>
  )
}
