import React, { useState } from 'react';
import { classes } from '../classData'
import { connect } from 'react-redux'
import { useHistory } from 'react-router';
import { addClass } from '../actions/index'
import { StyledLoginForm } from '../styled-components/StyledForm'
import React from 'react';
import styled from 'styled-components';

const StyledClassForm = styled.div`
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
        margin-bottom: 10px;
        margin-left: 37%;
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
        margin-top: .25em;
        margin-bottom: .25em;
        width: 40%;
        }

    button {
        color: #ffffff;
        background-color: #242943;
        width: 25%;
        padding: 1%;
        margin-left: 38%;
        margin-top: 2%;

        &:hover {
            background-color: #434862;
            color: #FFFFFF;
            transition: all .4s ease-in-out;
        }

        transition: all .4s ease-in-out;
    }

    
`


function ClassForm(props) {

    const [classData, setClassData] = useState({user_id: localStorage.user_id})
    
    const { push } = useHistory()

    const handleChange = e => {
        setClassData({
            ...classData, [e.target.name]: e.target.value
        })
    }

    const handleCancel = e => {
        e.preventDefault()
        push('/Home')
    }

    const handleSubmit = e => {
        e.preventDefault()
        const newClass = {...classData}
        props.addClass(newClass)
        setClassData({})
        console.log(newClass)
        push('/Home')
    }

    return (
        <StyledClassForm> 
        <form className='class-form container'>

            <h2>Instructor Class Form</h2>
                    <div className="form-content">
       
                        <label>Name
                            <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            onChange={handleChange}
                            />
                        </label>

                        <label>Type
                            <input
                            type='text'
                            name='type'
                            placeholder='Type'
                            onChange={handleChange}
                            />
                        </label>
                        
                        <label>Start Time
                            <input
                            type='text'
                            name='start_time'
                            placeholder='Start Time'
                            onChange={handleChange}
                            />
                        </label>

                        <label>Duration
                            <input
                            type='text'
                            name='duration'
                            placeholder='Duration'
                            onChange={handleChange}
                            />
                        </label>

                        <label>Intensity level
                            <input
                            type='text'
                            name='intensity_level'
                            placeholder='Intensity Level'
                            onChange={handleChange}
                            />
                        </label>

                        <label>Location
                            <input
                            type='text'
                            name='location'
                            placeholder='Location'
                            onChange={handleChange}
                            />
                        </label>

                        <label>Max class size
                            <input
                            type='text'
                            name='max_class_size'
                            placeholder='Max Class Size'
                            onChange={handleChange}
                            />
                        </label>

                        <label>Date
                            <input
                            type='text'
                            name='date'
                            placeholder='Date'
                            onChange={handleChange}
                            />
                        </label>

                    <div className='submit'>
                      <button onClick={handleSubmit}>Submit</button>
                      <button onClick={handleCancel}>Cancel</button>
                    </div>
              </form> 
        </StyledClassForm>  
    )
}
                    

const mapStateToProps = state => {
    return {
        credentials: state.credentials,
        classes: state.classes,
        isFetching: state.isFetching,
        error: state.error
    }
}


export default connect(mapStateToProps, { addClass })(ClassForm);