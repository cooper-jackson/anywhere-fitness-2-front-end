import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import axios from 'axios'

function SignUpForm(props) {
    const [credentials, setCredentials] = useState({})
    const { push } = useHistory()

    const handleLoginClick = e => {
        e.preventDefault()
        // console.log(credentials)
        axios.post('https://ft-anywhere-fitness-2.herokuapp.com/register', credentials)
            .then(res => {
                localStorage.setItem('user_id', res.data.user.user_id)
                localStorage.setItem('username', res.data.user.username)
                localStorage.setItem('email', res.data.user.email)
                localStorage.setItem('role', res.data.user.role)
                localStorage.setItem('token', res.data.token)
                        // props.loginSuccess(res.data)
                        
                setCredentials({})
                push('/Home')
                console.log(res)
            })
            //     axios.post('https://ft-anywhere-fitness-2.herokuapp.com/login', { username: credentials.username, password: credentials.password })
            //         .then(res => {
                        
            //         })
            //         .catch(err => {
            //             console.log(err)
            //         })
            //     // push('/')
            // })
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
        <form>
            <div>
                <h2>Sign up</h2>
                <div>
                    <label>Name: </label>
                    <input type="text" name="username" id="username" onChange={handleChange}/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name="email" id="email" onChange={handleChange}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password" id="password" onChange={handleChange}/>
                </div>
                <div>
                    <label>Role: (Client or Instructor) </label>
                    <input type="text" name="role" id="role" onChange={handleChange}/>
                </div>

                {/* ADD ROLE */}
                <button onClick={handleLoginClick}>Sign up</button>
            </div>
        </form>
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