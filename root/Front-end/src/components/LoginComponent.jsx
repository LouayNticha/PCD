import React from 'react'
import { useState ,useEffect } from 'react';







export default function LoginComponent(props){

    return(
        <div>
            <form action="#" className="form active" id="login">
            <h2>E-care Medical Clinic</h2>
            <label for="email">CIN</label>
            <div className="pass-reset" onclick="activeInput(this)">
                <input type="text" name="email" class="email" id="emailInput" placeholder="Username"/>
            </div>
            <label for="password">Password</label>
            <div className="pass-reset">
                <input type="password" class="password" name="password" id="password" placeholder="Password"/>
                <a href="#" class="reset-password">Forgot Password?</a>
            </div>
            <div className="pass-reset remember-box">
                <input type="checkbox" name="remember" class="remember" id="remember"/><span class="remember-text">Remember Password</span>
            </div>
            <button className="btn btn-login">Login</button>
            <p>Do you have an account?
            <a onClick={props.changeForms} id='changeToRegister'>Sign up</a>
            </p>
            <p className='or'>--</p>
        </form>
        </div>
    )
}