import React from "react";
import styled from "styled-components";

const StyledForm = styled.div`
    /* background-color: #242943; */
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(36,41,67,1) 35%);    
    color: #ffffff; 
    position: relative;
    /* width: 100%; */
    min-height: 100vh;
    /* width: 60%; */
    /* min-height: 50vh; */
    /* margin: 0 auto; */
    /* padding: 10% 0%; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    /* padding: 5% 5%; */
    margin: 0;
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
        /* box-shadow: 0 10px 40px -14px rgba(0,0,0,0.25); */
    }

    .form-content {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    }

    input,
    select,
    textarea {
        /* background: #434862; */
        background: #e8eeef;
        color: #ffffff;
        /* border: 1px solid #434862; */
        box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
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
        
        /* ::placeholder{
            color: #ffffff;
        } */

        &:focus {
            /* border-color: #ffffff;
            box-shadow: 0 0 0 2px #9bf1ff; */
            outline: none;
        }

        &:input {
            border-color: #323232;
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

`;

function LoginForm() {
  return (
    <StyledForm>
        <div className="container">
            <form>
                    <h2>Log in</h2>
                    <div className="form-content">
                    {/* <div>
                                <input type="text" name="name" id="name" placeholder="Name" />
                            </div> */}
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
                        <button>Log in</button>
                        <button>Register</button>
                    </div>
                </div>
            </form>
        </div>
    </StyledForm>
  );
}

export default LoginForm;
