import React from 'react'
import styled from 'styled-components'

const StyledForm =styled.div`
    background-color: #242943;
    color: #ffffff; 

    input,
    select,
    textarea {
        background: #3a3f59;
        border: none;
        width: 50%;
        margin: 1%;


        &:focus {
            border-color: #9bf1ff;
            box-shadow: 0 0 0 2px #9bf1ff;
        }
    }

    button {
        background-color: #ffffff;
        color: #242943;
        margin: 1%;


        &:hover {
            background-color: #9bf1ff;
        }
    }

`

function SignUpForm() {
    return (
        <form>
            <StyledForm>
                <h2>Sign up</h2>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" id="name" placeholder="Enter your name" />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name="email" id="email" placeholder="Enter your email address" />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password" id="password" placeholder="Password" />
                </div>
                <div>
                    <label>Verify Password: </label>
                    <input type="password" name="verifyPassword" id="verifyPassword" placeholder="Verify password" />
                </div>
                <button>Sign up</button>
            </StyledForm>
        </form>
    )
}

export default SignUpForm;