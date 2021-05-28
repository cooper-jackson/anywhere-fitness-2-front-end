import styled from 'styled-components'

export const StyledHomePage = styled.div`
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(36,41,67,1) 35%);    
    color: #ffffff; 
    position: relative;
    min-height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
    box-sizing: border-box;

    button {
        font-weight: 600;
        text-align: center;
        font-size: 1.1rem;
        background-color: #e8eeef;
        color: #242943;
        border: none;
        border-radius: 5px;
        margin: .5em auto;
        padding: 3%;
        cursor: pointer;
        display: block;
    }

`;