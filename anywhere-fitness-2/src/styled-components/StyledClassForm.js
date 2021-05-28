import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.div`
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(36,41,67,1) 35%);
    color: #242943;
    position: relative;
    min-height: 100vh;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    box-sizing: border-box;

    form {
        background: #ffffff;
        padding: 2em;
        padding-bottom: 5em;
        padding-top: 5em;
        border-radius: 10px;
        width: 50%;
        height: 600px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .class-form {
        border: solid thick grey;
    }

    h2 {
        text-align: center;
    }

    label {
        margin: auto;
        /* margin-bottom: 10px;
        margin-left: 37%; */
        display: flex;
        flex-direction: column;
    }


    input,
    select,
    textarea {
        background: #E8EEEF;
        color: #323232;
        border: none;
        border-radius: 5px;
        padding: .5em;
        /* margin-top: .5em;
        margin-bottom: .5em; */
        margin: .5rem auto;
        width: 40%;
        }

    button {
        color: #ffffff;
        background-color: #242943;
        width: 25%;
        padding: 1%;
        /* margin-left: 38%; */
        /* margin-top: 2%; */
        margin: .5rem auto;

        &:hover {
            background-color: #434862;
            color: #FFFFFF;
            transition: all .4s ease-in-out;
        }

        transition: all .4s ease-in-out;
    }
`

export const StyledClassForm = ({children}) => {
    return <StyledForm>{children}</StyledForm>;
};
    
