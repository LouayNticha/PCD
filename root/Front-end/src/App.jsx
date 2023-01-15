import React from "react"



export default function App() {
   
    
    
    
    
    return (
    <div className="container">
        <div className="row">
            <img src="/src/assets/img.jpg" alt="img" className="img"/>
        </div>
        <div className="row">
            <div className="form active" id="login">
                <h2>E-care Medical Clinic</h2>
                <label for="email">your ID</label>
                <div className="pass-reset" onclick="activeInput(this)">
                    <input type="text" name="email" class="email" id="emailInput" placeholder="Username"/>
                </div>
                <label for="password">Password</label>
                <div className="pass-reset" onclick="activeInput(this)">
                    <input type="password" class="password" name="password" id="password" placeholder="Password"/>
                    <a href="#" class="reset-password">Reset Password</a>
                </div>
                <div className="pass-reset remember-box">
                    <input type="checkbox" name="remember" class="remember" id="remember"/><span class="remember-text">Rememeber Password</span>
                </div>
                <button className="btn btn-login">Login</button>


            </div>
        </div>

        
    </div>
    )
}
