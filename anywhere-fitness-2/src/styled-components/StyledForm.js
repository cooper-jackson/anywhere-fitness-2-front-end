import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.div`
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(36,41,67,1) 35%);    
    color: #ffffff; 
    position: relative;
    min-height: 100vh;
    margin: 0;
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

    input {
        background: #e8eeef;
        color: #323232;
        border: none;
        border-radius: 5px;
        padding: 1em;
        margin-top: .25em;
        margin-bottom: .5em;
        width: 82%;
        }   
        
        &:focus {
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

    @media(max-width: 620px) {
        form {
            width: 300px;
    }
`;

export const StyledLoginForm = ({children}) => {
    return <StyledForm>{children}</StyledForm>;
};