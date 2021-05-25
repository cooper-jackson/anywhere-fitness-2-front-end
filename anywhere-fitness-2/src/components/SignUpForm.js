import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.div`
    /* background-color: #242943; */
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(36,41,67,1) 35%);    
    color: #ffffff; 
    position: relative;
    min-height: 100vh;
    /* min-height: 50vh; */
    /* width: 100%; */
    /* width: 60%; */
    /* margin: 0 auto; */
    /* padding: 10% 0%; */
    margin: 0;
    /* padding: 5% 5%; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    box-sizing: border-box;
       
    h2 {
        font-size: 2.8rem;
        text-align: center;
        color: #323232;
    }

    form {
        background: #FFFFFF;
        padding: 2em;
        padding-bottom: 3em;
        border-radius: 10px;
        /* max-width: 400px; */
        /* max-width: 100%; */
        width: 550px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .form-content {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    }

    input,
    select,
    textarea {
        background: #e8eeef;
        color: #323232;
        border: none;
        border-radius: 5px;
        padding: 1em;
        margin-top: .25em;
        margin-bottom: .5em;
        width: 82%;
        /* margin: 0 auto 1em auto; */
        /* display: flex;
        align-items: center;
        justify-content: center; */
        }   
        
        &:focus {
            /* border-color: #ffffff;
            box-shadow: 0 0 0 2px #9bf1ff; */
            outline: none;
        }
    }

    button {
        font-weight: 600;
        text-align: center;
        font-size: 1.1rem;
        background-color: #e8eeef;
        color: #242943;
        width: 100%;
        border: none;
        border-radius: 5px;
        /* margin-top: .5em;
        margin-bottom: .5em; */
        margin: .5em auto;
        padding: 1%;
        cursor: pointer;
        display: block;
      
        &:hover {
            background-color: #434862;
            color: #ffffff;
            transition: all .4s ease-in-out;
        }
        transition: all .4s ease-in-out;
    }

    .form-button {
        padding-top: 2.5%;
        padding-bottom: 5%;
    }

`;

function SignUpForm() {
    return (
        <StyledForm>
            <div className="container">
            <form>  
                <h2>Sign up</h2>
                <div className="form-content">
                    <div>
                        <input 
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
                        placeholder="Enter your email address"
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
    </StyledForm>
    )
}

export default SignUpForm;