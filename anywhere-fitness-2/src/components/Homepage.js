import React, { useEffect }from 'react';
import { connect } from 'react-redux'
import ClassesList from './ClassesList'
import { fetchClasses } from '../actions/index'
import { useHistory } from 'react-router';
import { axiosWithAuth } from '../utils/AxiosWithAuth';

const Homepage = (props) => {
      
    useEffect(() => {
        props.fetchClasses()
        props.credentials.user_id = localStorage.user_id
        props.credentials.username = localStorage.username
        props.credentials.email = localStorage.email
        props.credentials.role = localStorage.role
    }, [])

    const { push } = useHistory()

    const handleAddClass = e => {
        e.preventDefault()
        push('/AddClass')
    }

    const handleLogout = e => {
        e.preventDefault()
        localStorage.removeItem("token")
        localStorage.removeItem("user_id")
        localStorage.removeItem("username")
        localStorage.removeItem("email")
        localStorage.removeItem("role")
        push('/')
    }

    const handleSaveChanges = e => {
        e.preventDefault()
        props.fetchClasses()
        // console.log(props.classes)
    }

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

    return (
        <div>
            {localStorage.role === 'INSTRUCTOR' && <button onClick={handleAddClass}>Add Class</button>}
            <button onClick={handleLogout}>Logout</button>
            {props.isFetching === true ? <p>Please Wait... </p> : <ClassesList/> }
            <button onClick={handleSaveChanges}>Save Changes</button>
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