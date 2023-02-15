import React from 'react'



export default function RegisterComponent(props) {
    return(
        <div>
            <form action="#" className="form active" id="register">
                <h2>E-care Medical Clinic</h2>
                <label for="email">CIN</label>
                <div className="pass-reset">
                    <input type="text" name="email" class="email" id="emailInput" placeholder="Username"/>
                </div>
                <label for="password">Password</label>
                <div className="pass-reset">
                    <input type="password" class="password" name="password" id="password" placeholder="Password"/>
                </div>
                <label for="password">Re-enter Password</label>
                <div className="pass-reset">
                    <input type="password" class="password" name="password" id="password" placeholder="Password"/>
                </div>
                <div className="pass-reset remember-box">
                    <input type="checkbox" name="remember" class="remember" id="remember"/><span class="remember-text">Remember Password</span>
                </div>
                <button className="btn btn-login">Sign Up</button>
                <p>Do you have an account?
                <a onClick={props.changeForms} id='changeToLogin'>Sign In</a>
                </p>
                <p className='or'>--</p>
            </form>
        </div>
    )
    
}
