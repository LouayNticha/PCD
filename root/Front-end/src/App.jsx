import React from "react"
import { useState } from "react";
import { Route,Routes } from "react-router-dom"; 

import LandingPage from './components/LandingPage'
import DocNav from "./components/Nav"
export default function App() {

    return (
    <div>
        <Routes>
            <Route path='/' element={<LandingPage />}></Route>
            <Route path='/DoctorsHome' element={<DocNav />} ></Route>
        </Routes>
    </div>
    )
}
