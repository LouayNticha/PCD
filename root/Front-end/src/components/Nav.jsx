import React, { useState, useEffect } from 'react';
import '../CSS/Nav.css';

export default function Nav() {
  const [menuIsActive, setMenuIsActive] = useState(false);

  // add hovered class to selected list item
  useEffect(() => {
    let list = document.querySelectorAll(".navigation li");

    function activeLink() {
      list.forEach((item) => {
        item.classList.remove("hovered");
      });
      this.classList.add("hovered");
    }

    list.forEach((item) => item.addEventListener("mouseover", activeLink));

    return () => {
      list.forEach((item) => item.removeEventListener("mouseover", activeLink));
    };
  }, []);

  // Menu Toggle
  const handleToggle = () => {
    setMenuIsActive(!menuIsActive);
  };

  return (
    <div className={styles.Nav}>
      <div className='container'>
        <div className={`navigation ${menuIsActive ? 'active' : ''}`}>
          <ul>
            <li>
              <a href="#">
                <span className="icon">
                <ion-icon name="logo-apple"></ion-icon>
                </span>
                <span className="title">E-Care</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span className="title">Dashboard</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon">
                  <ion-icon name="people-outline"></ion-icon>
                </span>
                <span className="title">Customers</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon">
                  <ion-icon name="chatbubble-outline"></ion-icon>
                </span>
                <span className="title">Messages</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon">
                  <ion-icon name="help-outline"></ion-icon>
                </span>
                <span className="title">Help</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon">
                  <ion-icon name="settings-outline"></ion-icon>
                </span>
                <span className="title">Settings</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon">
                  <ion-icon name="lock-closed-outline"></ion-icon>
                </span>
                <span className="title">Password</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon">
                  <ion-icon name="log-out-outline"></ion-icon>
                </span>
                <span className="title">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="toggle" ></div>
        <div className="main">
              <div className="topbar">
                  <div className="toggle" onClick={handleToggle}>
                      <ion-icon name="menu-outline"></ion-icon>
                  </div>
              
                  <div className="search">
                      <label>
                          <input type="text" placeholder="Search here"></input>
                          <ion-icon name="search-outline"></ion-icon>
                      </label>
                  </div>

                  <div class="user">
                      <img src="./assets/imgs/customer01.jpg" alt='user'></img>
                  </div>
          </div>
          </div>
      </div>
    </div>
  );
}
