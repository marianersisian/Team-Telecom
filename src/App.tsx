import './App.css'
import React from "react";

import { Routes, Route } from 'react-router-dom';

import PrivateClients from "./pages/privateClients";
import Business from "./pages/business";
import Eshop from "./pages/eshop";
import MyAccount from './pages/myAccount';


export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<PrivateClients />} />
                <Route path="/business" element= {<Business/>} />
                <Route path="/eshop" element= {<Eshop />} />
                <Route path="/myaccount" element={<MyAccount/>} />
            </Routes>
            
        </>
    )
}
