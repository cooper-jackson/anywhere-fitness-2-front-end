import React from 'react'
import styled from 'styled-components'

const StyledForm =styled.div`
    background-color: #242943;
    color: #ffffff; 

    input,
    select,
    textarea {
        background: #434862;
        border: none;
        width: 50%;
        color: #ffffff;
        padding: .5%;
        margin: 1%;


        &:focus {
            border-color: #9bf1ff;
            box-shadow: 0 0 0 2px #9bf1ff;
        }
    }

    button {
        background-color: '#ffffff';
        color: '#242943';
        margin: 1%;

        &:hover {
            background-color: #9bf1ff;
        }
    }

`

function LoginForm() {
    return (
        <form>
            <StyledForm>
                <h2>Log in</h2>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password" id="password" />
                </div>
                <button>Log in</button>
            </StyledForm>
        </form>
    )
}


export default LoginForm;