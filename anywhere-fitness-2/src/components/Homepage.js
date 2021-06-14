import React, { useEffect }from 'react';
import { connect } from 'react-redux'
import ClassesList from './ClassesList'
import { fetchClasses } from '../actions/index'
import { useHistory } from 'react-router';
import 'intro.js/introjs.css'
import { StyledHomePage } from '../styled-components/StyledHomepage'

const Homepage = (props) => {
      
    useEffect(() => {
        props.fetchClasses()
        props.credentials.user_id = localStorage.user_id
        props.credentials.username = localStorage.username
        props.credentials.email = localStorage.email
        props.credentials.role = localStorage.role
        // eslint-disable-next-line
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
    // const handleSaveChanges = e => {
    //     e.preventDefault()
    //     props.fetchClasses()
    //     // console.log(props.classes)
    // }

    //GETS CURRENT CLASSES OF USER
    // const handleUserInfo = e => {
    //     e.preventDefault()
    //     axiosWithAuth().get(`https://ft-anywhere-fitness-2.herokuapp.com/reserved`)
    //     .then(res => {
    //         console.log(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    //     // console.log(props.classes)
    // }

    return (
        <StyledHomePage>
            <div>
                <button className='logout' onClick={handleLogout}>Logout</button>
                {localStorage.role === 'INSTRUCTOR' && <button className='add-class' onClick={handleAddClass}>Add Class</button>}
            </div>
            {props.isFetching === true ? <p>Please Wait... </p> : <ClassesList/> }
        </StyledHomePage>
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