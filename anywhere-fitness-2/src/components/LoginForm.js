import React from "react";
import { StyledLoginForm } from "../styled-components/StyledForm"

function LoginForm() {
  return (
    <StyledLoginForm>
        <div className="container">
            <form>  
                <h2>Log in</h2>
                <div className="form-content">
                    <div>
                        <input 
                        autoFocus
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Name" 
                        />
                    </div>
                    <div>
                        <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        />
                    </div>
                    <div className="form-button">
                        <button>Log in</button>
                        <button>Register</button>
                    </div>
                </div>
            </form>
        </div>
    </StyledLoginForm>
  );
}

export default LoginForm;
