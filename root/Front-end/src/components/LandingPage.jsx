import React from "react"
import { useState } from "react";
import RegisterComponent from "./RegisterComponent";
import LoginComponent from "./LoginComponent";

import  '../CSS/Landingpage.css'


export default function LandingPage() {
    const [formActive,setformActive] = useState(true);

    function changeForms(){
        setformActive(!formActive)
    }
    
    return (
    <div>
        <div className="container">
            <div className="row">
                <img src="/img.jpg" alt="img" className="img"/>
            </div>
            <div className="row">
                {formActive && <LoginComponent changeForms={changeForms} />}

                {!formActive && <RegisterComponent changeForms={changeForms} />}
                
            </div> 
        </div>
    </div>
    )
}
