import React from "react";
import { useState } from "react";
import styles from "../CSS/Landingpage.module.css";

function LoginComponent(props) {
  return (
    <div>
      <form action="#" className={`${styles.form} ${styles.active}`} id="login">
        <h2>E-care Medical Clinic</h2>
        <label htmlFor="email">CIN</label>
        <div className={styles["pass-reset"]} onClick={() => activeInput(this)}>
          <input
            type="text"
            name="email"
            className={styles.email}
            id="emailInput"
            placeholder="Username"
          />
        </div>
        <label htmlFor="password">Password</label>
        <div className={styles["pass-reset"]}>
          <input
            type="password"
            className={styles.password}
            name="password"
            id="password"
            placeholder="Password"
          />
          <a href="#" className={styles["reset-password"]}>
            Forgot Password?
          </a>
        </div>
        <div className={`${styles["pass-reset"]} ${styles["remember-box"]}`}>
          <input
            type="checkbox"
            name="remember"
            className={styles.remember}
            id="remember"
          />
          <span className={styles["remember-text"]}>Remember Password</span>
        </div>
        <button className={`${styles.btn} ${styles["btn-login"]}`}>Login</button>
        <p>
          Do you have an account?
          <a onClick={props.changeForms} id="changeToRegister">
            Sign up
          </a>
        </p>
        <p className={styles.or}>--</p>
      </form>
    </div>
  );
}

function RegisterComponent(props) {
    return(
        <div>
            <form action="#" className={styles.form + " " + styles.active} id="register">
                <h2>E-care Medical Clinic</h2>
                <label htmlFor="email">CIN</label>
                <div className={styles["pass-reset"]}>
                    <input type="text" name="email" className={styles.email} id="emailInput" placeholder="Username"/>
                </div>
                <label htmlFor="password">Password</label>
                <div className={styles["pass-reset"]}>
                    <input type="password" className={styles.password} name="password" id="password" placeholder="Password"/>
                </div>
                <label htmlFor="password">Re-enter Password</label>
                <div className={styles["pass-reset"]}>
                    <input type="password" className={styles.password} name="password" id="password" placeholder="Password"/>
                </div>
                <div className={styles["pass-reset"] + " " + styles["remember-box"]}>
                    <input type="checkbox" name="remember" className={styles.remember} id="remember"/><span className={styles["remember-text"]}>Remember Password</span>
                </div>
                <button className={styles.btn + " " + styles["btn-login"]}>Sign Up</button>
                <p>Do you have an account?
                <a onClick={props.changeForms} id='changeToLogin'>Sign In</a>
                </p>
                <p className={styles.or}>--</p>
            </form>
        </div>
    )
}

function LandingPage() {
    const [formActive, setformActive] = useState(true);

    function changeForms() {
        setformActive(!formActive)
    }

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.row}>
                    <img src="/img.jpg" alt="img" className={styles.img}/>
                </div>
                <div className={styles.row}>
                    {formActive && <LoginComponent changeForms={changeForms} />}
                    {!formActive && <RegisterComponent changeForms={changeForms} />}
                </div> 
            </div>
        </div>
    )
}

export default LandingPage;
