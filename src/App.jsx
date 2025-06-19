import './App.css'

import { Routes, Route } from 'react-router-dom'


import PrivateClients from "./pages/privateClients";
import Business from './pages/business';
import Eshop from './pages/eshop';



export default function App() {
    return (
        <>
            <Routes>
                <Route path="/privateClients" element={<PrivateClients />} />
                <Route path="/business" element= {<Business/>} />
                <Route path="/eshop" element= {<Eshop />} />
            </Routes>
            
        </>
    )
}
