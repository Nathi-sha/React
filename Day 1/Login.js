import React from "react";

function Login()
{
    return(
        <div class="background">       
        
        <form class="hello">
            <center>Login</center>
            <label>
                UserName : 
                <input type="text"/> 
            </label>
            
            <label >
                Password : 
                <input type="password"/>
            <a href="#">forget password</a>
            </label>
            <button>Login</button>
        </form>
        </div>
    );
}

export default Login;