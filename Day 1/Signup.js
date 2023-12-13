import React from "react";

function Signup()
{
    return(
        <div class="background">       
        
        <form class="hello">
            <center>Sign Up</center>
            
            <label>
                User Name : 
                <input type="text"/>
            </label>        
            

            <label>
                Name of your Organization: 
                <input type="text"/>
            </label>

            <label>
                E-Mail: 
                <input type="email"/>
            </label>
            
            <label >
                Password : 
                <input type="password"/>
            </label>

            <label >
                Confirm Password : 
                <input type="password"/>
            </label>

            <button>Sign Up</button>
        </form>
        </div>
    );
}

export default Signup;