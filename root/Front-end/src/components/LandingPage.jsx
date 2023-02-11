import React from "react"
import { useState } from "react";
import RegisterComponent from "./RegisterComponent";
import LoginComponent from "./LoginComponent";



export default function App() {
    const [formActive,setformActive] = useState(true);

    function changeForms(){
        setformActive(!formActive)
    }
    
    return (
    <div className="container">
        <div className="row">
            <img src="/public/img.jpg" alt="img" className="img"/>
        </div>
        <div className="row">
            {formActive && <LoginComponent changeForms={changeForms} />}

            {!formActive && <RegisterComponent changeForms={changeForms} />}
            
        </div> 
    </div>
    )
}
