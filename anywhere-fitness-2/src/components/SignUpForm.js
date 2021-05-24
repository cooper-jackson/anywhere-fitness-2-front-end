import React from 'react'

function SignUpForm() {
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
                <div>
                    <label>Verify Password: </label>
                    <input type="password" name="verifyPassword" id="verifyPassword" />
                </div>
                <button>Sign up</button>
            </div>
        </form>
    )
}

export default SignUpForm;