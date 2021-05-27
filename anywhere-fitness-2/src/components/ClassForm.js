import React, { useState } from 'react';
import { classes } from '../classData'
import { connect } from 'react-redux'
import { useHistory } from 'react-router';
import { addClass } from '../actions/index'


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
        <div>
            <form className='class-form container'>
                <div className='class-form inputs'>
                    <label>Name
                        <input
                        type='text'
                        name='name'
                        onChange={handleChange}
                        />
                    </label>

                    <label>Type
                        <input
                        type='text'
                        name='type'
                        onChange={handleChange}
                        />
                    </label>
                    
                    <label>Start Time
                        <input
                        type='text'
                        name='start_time'
                        onChange={handleChange}
                        />
                    </label>

                    <label>Duration
                        <input
                        type='text'
                        name='duration'
                        onChange={handleChange}
                        />
                    </label>

                    <label>Intensity level
                        <input
                        type='text'
                        name='intensity_level'
                        onChange={handleChange}
                        />
                    </label>

                    <label>Location
                        <input
                        type='text'
                        name='location'
                        onChange={handleChange}
                        />
                    </label>

                    <label>Max class size
                        <input
                        type='number'
                        name='max_class_size'
                        onChange={handleChange}
                        />
                    </label>

                    <label>Date
                        <input
                        type='text'
                        name='date'
                        onChange={handleChange}
                        />
                    </label>
                </div>
            </form>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
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
