import React from "react";
import { NavLink,Link } from "react-router-dom";

export default function NavBar(){

    return(
        <div>
            <nav>
                <Link to="/Home"><img src="/public/E-Clinic.png" alt="img" className="img"/></Link>
                <NavLink to="/Home/test">Demander Test</NavLink>
                <NavLink to="/Home/Patients">Patients</NavLink>
                <NavLink to="/Home/chat">Chat</NavLink>
                <NavLink to="/Home/calender">Calendrier</NavLink>
                <NavLink to="/Home/notifications"><img src="/public/notifications.png" alt="img" className="img"/></NavLink>
                <NavLink to="/Home/Usersettings"><img src="/public/utilisateur.png" alt="img" className="img"/></NavLink>
            </nav>

        </div>
    )
}