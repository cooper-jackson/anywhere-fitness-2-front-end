import React, { useState } from 'react';
import { classes } from '../classData'
import { connect } from 'react-redux'
import { useHistory } from 'react-router';
import { addClass } from '../actions/index'
import { StyledLoginForm } from '../styled-components/StyledForm'
import { StyledClassForm } from '../styled-components/StyledClassForm'
import styled from 'styled-components';


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
                </div>
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