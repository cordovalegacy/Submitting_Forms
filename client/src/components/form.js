import { useState } from 'react'

const Form = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const errors = {
        firstName: "First name must be greater than 2 characters",
        lastName: "Last name must be greater than 2 characters",
        email: "Email Address must be greater than 5 characters",
        passwordMatch: "Passwords must match",
        passwordLength: "Password must be greater than 8 characters"
    }


    const submitHandler = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <div className="container">
            <h1>Registration</h1>
            <form onSubmit={submitHandler}>
                <label>First Name: </label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => { setFirstName(e.target.value) }}
                />
                {firstName.length <= 2 ? <span>{errors.firstName}</span> :null}
                <label>Last Name: </label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => { setLastName(e.target.value) }}
                />
                {lastName.length <= 2 ? <span>{errors.lastName}</span> :null}
                <label>Email Address: </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                {email.length <= 5 ? <span>{errors.email}</span> :null}
                <label>Password: </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                {password.length <= 8 ? <span>{errors.passwordLength}</span> :null}
                <label>Confirm Password: </label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => { setConfirmPassword(e.target.value) }}
                />
                {password != confirmPassword ? <span>{errors.passwordMatch}</span> :null}
                <input type="submit" value="Submit" />
            </form>
            <div>
                {
                    submitted == true ?
                        <p>Submitted! Here is your User!</p>
                        : <p>Please Submit a User</p>
                }
            </div>
        </div>
    )

}

export default Form;