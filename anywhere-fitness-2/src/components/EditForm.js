import React, { useEffect, useState } from 'react';
import { classes } from '../classData'
import { connect } from 'react-redux'
import { useHistory, useParams } from 'react-router';
import { addClass } from '../actions/index'
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import { StyledClassForm } from '../styled-components/StyledClassForm';


function EditForm(props) {

    const [classData, setClassData] = useState({user_id: localStorage.user_id})
    const { class_id } = useParams()
    const { push } = useHistory()

    useEffect(() => {
        axiosWithAuth().get(`https://ft-anywhere-fitness-2.herokuapp.com/classes/${class_id}`)
        .then(res => {
            const newClass = {
                name: res.data.name,
                type: res.data.type,
                date: res.data.date,
                start_time: res.data.start_time,
                duration: res.data.duration,
                intensity_level: res.data.intensity_level,
                location: res.data.location,
                max_class_size: res.data.max_class_size,
            }
            setClassData(newClass)
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

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
        console.log(classData)
        axiosWithAuth().put(`https://ft-anywhere-fitness-2.herokuapp.com/classes/${class_id}`, classData)
        .then(res => {
            console.log(res)
            setClassData(res.data)
            push('/Home')
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleDelete = e => {
        e.preventDefault()
        console.log(class_id)
        axiosWithAuth().delete(`https://ft-anywhere-fitness-2.herokuapp.com/classes/${class_id}`)
        .then(res => {
            console.log(res)
            push('/Home')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <StyledClassForm> 
            <form className='class-form container'>
                <h2>Edit Class Form</h2>
                    <div className="form-content">
                        <label>Name
                            <input
                            type='text'
                            name='name'
                            value={classData.name}
                            onChange={handleChange}
                            placeholder={'Name'}
                            />
                        </label>

                        <label>Type
                            <input
                            type='text'
                            name='type'
                            value={classData.type}
                            onChange={handleChange}
                            placeholder={'Type'}
                            />
                        </label>
                        
                        <label>Start Time
                            <input
                            type='text'
                            name='start_time'
                            value={classData.start_time}
                            onChange={handleChange}
                            placeholder={'Start Time'}
                            />
                        </label>

                        <label>Duration
                            <input
                            type='text'
                            name='duration'
                            value={classData.duration}
                            onChange={handleChange}
                            placeholder={'Duration'}
                            />
                        </label>

                        <label>Intensity level
                            <input
                            type='text'
                            name='intensity_level'
                            value={classData.intensity_level}
                            onChange={handleChange}
                            placeholder={'Intensity Level'}
                            />
                        </label>

                        <label>Location
                            <input
                            type='text'
                            name='location'
                            value={classData.location}
                            onChange={handleChange}
                            placeholder={'Location'}
                            />
                        </label>

                        {/* <label>Current number of registered attendees
                            <input
                            type='text'
                            name='num_registered'
                            value={classData.num_registered}
                            onChange={handleChange}
                            placeholder={'Name'}
                            />
                        </label> */}

                        <label>Max class size
                            <input
                            type='text'
                            name='max_class_size'
                            value={classData.max_class_size}
                            onChange={handleChange}
                            placeholder={'Max Class Size'}
                            />
                        </label>

                        <label>Date
                            <input
                            type='text'
                            name='date'
                            value={classData.date}
                            onChange={handleChange}
                            placeholder={'Date'}
                            />
                        </label>
                    </div>
                    <button onClick={handleSubmit}>Submit</button>
                    <button onClick={handleDelete}>Delete</button>
                    <button onClick={handleCancel}>Cancel</button>
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


export default connect(mapStateToProps, { addClass, axiosWithAuth })(EditForm);
