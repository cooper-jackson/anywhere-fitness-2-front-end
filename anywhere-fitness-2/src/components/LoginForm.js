import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { loginStart, loginSuccess } from '../actions/index'
import { axiosWithAuth } from '../utils/AxiosWithAuth'
import { StyledLoginForm } from '../styled-components/StyledForm'

function LoginForm(props) {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    })

    let { push } = useHistory()

    const handleChange = e => {
        console.log(credentials)
        setCredentials({
            ...credentials, [e.target.name]: e.target.value
        })
    }

    const handleLoginClick = e => {
        e.preventDefault()
        props.loginStart(credentials)
        axiosWithAuth().post('https://ft-anywhere-fitness-2.herokuapp.com/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            axiosWithAuth().get('https://ft-anywhere-fitness-2.herokuapp.com/users/current')
            .then(res => {
                props.loginSuccess(res.data)
                localStorage.setItem('user_id', res.data.user_id)
                localStorage.setItem('username', res.data.username)
                localStorage.setItem('email', res.data.email)
                localStorage.setItem('role', res.data.role)
            })
            .catch(err => {
                console.log(err)
            })
            push('/Home')
        })
        .catch(err => {
            console.log(err.message)
        })
        console.log(credentials)
    }

    const handleRegisterClick = e => {
        e.preventDefault()
        push('/Register')
    }

    return (
        <StyledLoginForm>
            <div className="container">
                <form>
                    <h2>Log in</h2>
                    <div className="form-content">
                        <div>
                            <label>Username: </label>
                            <input type="text" name="username" value={credentials.username} onChange={handleChange} placeholder="Name"/>
                        </div>

                        <div>
                            <label>Password: </label>
                            <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password"/>
                        </div>
                        <button onClick={handleLoginClick}>Log in</button>
                        <button onClick={handleRegisterClick}>Register</button>
                    </div>
                </form>
            </div>
        </StyledLoginForm>
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

export default connect(mapStateToProps, { loginStart, loginSuccess })(LoginForm);
