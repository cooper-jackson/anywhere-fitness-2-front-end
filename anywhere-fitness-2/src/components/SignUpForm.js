import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import axios from 'axios'
import { StyledLoginForm } from '../styled-components/StyledForm'

function SignUpForm(props) {
    const [credentials, setCredentials] = useState({})
    const { push } = useHistory()

    const handleLoginClick = e => {
        e.preventDefault()
        axios.post('https://ft-anywhere-fitness-2.herokuapp.com/register', credentials)
            .then(res => {
                localStorage.setItem('user_id', res.data.user.user_id)
                localStorage.setItem('username', res.data.user.username)
                localStorage.setItem('email', res.data.user.email)
                localStorage.setItem('role', res.data.user.role)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('first_visit', res.data.user.role)              
                setCredentials({})
                push('/Home')
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })        
        }

    const handleChange = e => {
        setCredentials({
            ...credentials, [e.target.name]: e.target.value
        })
    }

    return (
        <StyledLoginForm>
            <div className="container">
                <form>
                    <h2>Sign up</h2>
                    <div className="form-content">
                        <label>Name: </label>
                        <div>
                            <input autoFocus type="text" name="username" id="username" onChange={handleChange} placeholder="Name"/>
                        </div>
                        <label>Email: </label>
                        <div>
                            <input type="email" name="email" id="email" onChange={handleChange} placeholder="Email"/>
                        </div>
                        <label>Password: </label>
                        <div>
                            <input type="password" name="password" id="password" onChange={handleChange} placeholder="Password"/>
                        </div>
                        <label>Role: (Client or Instructor) </label>
                        <div>
                            <input type="text" name="role" id="role" onChange={handleChange} placeholder="Role"/>
                        </div>
                    </div>
                </form>
                {/* ADD ROLE */}
                <button onClick={handleLoginClick}>Sign up</button>
            </div>
        </StyledLoginForm>
    )
}

const mapStateToProps = state => {
    return {
        classes: state.classes,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps)(SignUpForm);