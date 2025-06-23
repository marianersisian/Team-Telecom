import './App.css'
import React from "react";

import { Routes, Route } from 'react-router-dom'


import PrivateClients from "./components/pages/privateClients";
import Business from './components/pages/business';
import Eshop from './components/pages/eshop';



export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<PrivateClients />} />
                <Route path="/business" element= {<Business/>} />
                <Route path="/eshop" element= {<Eshop />} />
            </Routes>
            
        </>
    )
}
