import React from 'react'
import { StyledLoginForm } from '../styled-components/StyledForm'

function SignUpForm() {
    return (
        <StyledLoginForm>
            <div className="container">
            <form>  
                <h2>Sign up</h2>
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
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
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
                    <div>
                        <input 
                        type="password" 
                        name="verifyPassword" 
                        id="verifyPassword" 
                        placeholder="Verify password" 
                        />
                    </div>
                    <div className="form-button">
                        <button>Register</button>
                    </div>
                </div>
            </form>
        </div>
    </StyledLoginForm>
    )
}

export default SignUpForm;