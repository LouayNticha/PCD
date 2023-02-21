import React, { useState, useEffect } from 'react';
import styles from '../CSS/Nav.module.css';

export default function Nav() {
  const [menuIsActive, setMenuIsActive] = useState(false);

  // add hovered class to selected list item
  useEffect(() => {
    let list = document.querySelectorAll(`.${styles.navigation} li`);

    function activeLink() {
      list.forEach((item) => {
        item.classList.remove(styles.hovered);
      });
      this.classList.add(styles.hovered);
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
      <div className={styles.container}>
        <div className={`${styles.navigation} ${menuIsActive ? styles.active : ''}`}>
          <ul>
            <li>
              <a href="#">
                <span className={styles.icon}>
                  <ion-icon name="logo-apple"></ion-icon>
                </span>
                <span className={styles.title}>E-Care</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className={styles.icon}>
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span className={styles.title}>Dashboard</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className={styles.icon}>
                  <ion-icon name="people-outline"></ion-icon>
                </span>
                <span className={styles.title}>Patients</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className={styles.icon}>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                </span>
                <span className={styles.title}>Messages</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className={styles.icon}>
                  <ion-icon name="help-outline"></ion-icon>
                </span>
                <span className={styles.title}>Help</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className={styles.icon}>
                  <ion-icon name="settings-outline"></ion-icon>
                </span>
                <span className={styles.title}>Settings</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className={styles.icon}>
                  <ion-icon name="lock-closed-outline"></ion-icon>
                </span>
                <span className={styles.title}>Password</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className={styles.icon}>
                  <ion-icon name="log-out-outline"></ion-icon>
                </span>
                <span className={styles.title}>Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.toggle}></div>
        */nest under main/*
        <div className={styles.main}>
          <div className={styles.topbar}>
            <div className={styles.toggle} onClick={handleToggle}>
              <ion-icon name="menu-outline"></ion-icon>
            </div>
  
              
                  <div className={styles.search}>
                      <label>
                          <input type="text" placeholder="Search here"></input>
                          <ion-icon name="search-outline"></ion-icon>
                      </label>
                  </div>

                  <div className={styles.user}>
                      <img src="./assets/imgs/customer01.jpg" alt='user'></img>
                  </div>
          </div>
          <div className={styles.cardBox}>
                <div className={styles.card}>
                    <div>
                        <div className={styles.numbers}>1,504</div>
                        <div className={styles.cardName}>total des visites</div>
                    </div>

                    <div className={styles.iconBx}>
                        <ion-icon name="eye-outline"></ion-icon>
                    </div>
                </div>

                <div className={styles.card}>
                    <div>
                        <div className={styles.numbers}>80</div>
                        <div className={styles.cardName}>nombre de RDV</div>
                    </div>

                    <div className={styles.iconBx}>
                        <ion-icon name="call-outline"></ion-icon>
                    </div>
                </div>

                <div className={styles.card}>
                    <div>
                        <div className={styles.numbers}>284</div>
                        <div className={styles.cardName}>nombre de Tests</div>
                    </div>

                    <div className={styles.iconBx}>
                        <ion-icon name="flask-outline"></ion-icon>
                    </div>
                </div>

                <div className={styles.card}>
                    <div>
                        <div className={styles.numbers}>8</div>
                        <div className={styles.cardName}>absences ce mois</div>
                    </div>

                    <div className={styles.iconBx}>
                    <ion-icon name="stats-chart-outline"></ion-icon>
                    </div>
                </div>
            </div>
          //here
            <div className={styles.recentCustomers}>
                    <div className={styles.cardHeader}>
                        <h2>Recent Patients</h2>
                    </div>

                    <table>
                        <tr>
                            <td width="60px">
                                <div className={styles.imgBx}><img src="assets/imgs/customer02.jpg" alt=""></img></div>
                            </td>
                            <td>
                                <h4>mouhamed <br /> <span>tunis</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className={styles.imgBx}><img src="assets/imgs/customer01.jpg" alt=""></img></div>
                            </td>
                            <td>
                                <h4>salah <br /> <span>nabeul</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className={styles.imgBx}><img src="assets/imgs/customer02.jpg" alt=""></img></div>
                            </td>
                            <td>
                                <h4>ali <br /> <span>mahdia</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className={styles.imgBx}><img src="assets/imgs/customer01.jpg" alt=""></img></div>
                            </td>
                            <td>
                                <h4>amine <br /> <span>monastir</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className={styles.imgBx}><img src="assets/imgs/customer02.jpg" alt=""></img></div>
                            </td>
                            <td>
                                <h4>kamel<br /> <span>tunis</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className={styles.imgBx}><img src="assets/imgs/customer01.jpg" alt=""></img></div>
                            </td>
                            <td>
                                <h4>omar <br /> <span>bizerte</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className={styles.imgBx}><img src="assets/imgs/customer01.jpg" alt=""></img></div>
                            </td>
                            <td>
                                <h4>omar <br /> <span>bizerte</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className={styles.imgBx}><img src="assets/imgs/customer02.jpg" alt=""></img></div>
                            </td>
                            <td>
                                <h4>younes <br /> <span>tunis</span></h4>
                            </td>
                        </tr>
                    </table>
                </div>
          </div>
          
      </div>
    </div>
  );
}
