import React from 'react'

function LoginForm() {
    return (
        <form>
            <div>
                <h2>Log in</h2>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password" id="password" />
                </div>
                <button>Log in</button>
            </div>
        </form>
    )
}

export default LoginForm;