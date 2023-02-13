import React, { useState } from "react";
import "../CSS/DocNav.css";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleMenuClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleOverlayClick = () => {
    setIsNavOpen(false);
  };

  return (
    <div>
      <nav className={isNavOpen ? "open" : ""}>
        <div className="logo">
          <i className="bx bx-menu menu-icon" onClick={handleMenuClick}></i>
          <span className="logo-name">Logo</span>
        </div>

        <div className="sidebar">
          <div className="logo">
            <i className="bx bx-menu menu-icon" onClick={handleMenuClick}></i>
            <span className="logo-name">E-care Medical Clinic</span>
          </div>

          <div className="sidebar-content">
            <ul className="lists">
              <li className="list">
                <a href="#" className="nav-link">
                  <i className="bx bx-home-alt icon"></i>
                  <span className="link">Home</span>
                </a>
              </li>
              <li className="list">
                <a href="#" className="nav-link">
                  <i className="bx bx-bar-chart-alt-2 icon"></i>
                  <span className="link">Demander Test</span>
                </a>
              </li>
              <li className="list">
                <a href="#" className="nav-link">
                  <i className="bx bx-bell icon"></i>
                  <span className="link">Notifications</span>
                </a>
              </li>
              <li className="list">
                <a href="#" className="nav-link">
                  <i className="bx bx-message-rounded icon"></i>
                  <span className="link">Chat et Messages</span>
                </a>
              </li>
              <li className="list">
                <a href="#" className="nav-link">
                  <i className="bx bx-pie-chart-alt-2 icon"></i>
                  <span className="link">Statistiques</span>
                </a>
              </li>
              <li className="list">
                <a href="#" className="nav-link">
                  <i className="bx bx-calendar-alt icon"></i>
                  <span className="link">calendrier</span>
                </a>
              </li>
              <li className="list">
                <a href="#" className="nav-link">
                  <i className="bx bx-folder-open icon"></i>
                  <span className="link">Patients et dossiers</span>
                </a>
              </li>
            </ul>

            <div className="bottom-cotent">
              <li className="list">
                <a href="#" className="nav-link">
                  <i className="bx bx-cog icon"></i>
                  <span className="link">Settings</span>
                </a>
              </li>
              <li className="list">
                <a href="#" className="nav-link">
                  <i className="bx bx-log-out icon"></i>
                  <span className="link">Logout</span>
                </a>
              </li>
            </div>
          </div>
        </div>
      </nav>
      {isNavOpen && <section className="overlay" onClick={handleOverlayClick}></section>}
    </div>
  );
}
