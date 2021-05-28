import React, { useEffect }from 'react';
import { connect } from 'react-redux'
import ClassesList from './ClassesList'
import { fetchClasses } from '../actions/index'
import { useHistory } from 'react-router';
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import 'intro.js/introjs.css'
import introJs from 'intro.js'

const Homepage = (props) => {
      
    useEffect(() => {
        props.fetchClasses()
        props.credentials.user_id = localStorage.user_id
        props.credentials.username = localStorage.username
        props.credentials.email = localStorage.email
        props.credentials.role = localStorage.role
    }, [])

    const { push } = useHistory()

    //ADD CLASS
    const handleAddClass = e => {
        e.preventDefault()
        push('/AddClass')
    }

    //LOGOUT
    const handleLogout = e => {
        e.preventDefault()
        localStorage.clear()
        push('/')
    }

    //SAVE CHANGES
    const handleSaveChanges = e => {
        e.preventDefault()
        props.fetchClasses()
        // console.log(props.classes)
    }

    //GETS CURRENT CLASSES OF USER
    const handleUserInfo = e => {
        e.preventDefault()
        axiosWithAuth().get(`https://ft-anywhere-fitness-2.herokuapp.com/reserved`)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
        // console.log(props.classes)
    }

    // //CHECK FOR USER FIRST VISIT - RUN ONBOARDING 
    // const checkForOnboarding = () => {
    //     if(localStorage.first_visit === 'false'){
    //         return
    //     } else if(localStorage.first_visit === 'INSTRUCTOR') {
    //         introJs().setOptions({
    //             steps: [
    //                 {intro: "Thanks for signing up as an instructor! We look forward to providing our services to you and our customers."},
    //                 {element: document.querySelector('.add-class'), intro: 'Here you can create a class for prospects to see.'},
    //             ]
    //         }).start()
    //     } else return
    // } 
    // useEffect(() => {
    //     checkForOnboarding()
    // }, [])


    return (
        <div>
            {localStorage.role === 'INSTRUCTOR' && <button className='add-class' onClick={handleAddClass}>Add Class</button>}
            <button onClick={handleLogout}>Logout</button>
            {props.isFetching === true ? <p>Please Wait... </p> : <ClassesList/> }
            <button className='save-changes' onClick={handleSaveChanges}>Save Changes</button>
            <button onClick={handleUserInfo}>Get User Info</button>
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

export default connect(mapStateToProps, {fetchClasses})(Homepage);