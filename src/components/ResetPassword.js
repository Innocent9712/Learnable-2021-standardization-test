import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import logo_mobile from "../assets/icons/logo_mobile.svg"
import second_logo from "../assets/icons/second_logo.svg"

function ResetPassword() {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [passwordMatch, setPasswordMatch] = useState(false)

    useEffect(() => {
        const clearError = setTimeout((error) => {
            setError(false)
        }, 3000);
    return () => {
        clearTimeout(clearError)
    }
}, [error])

    const handleChange = (e) => {    
        return (
            e.target.name === "psw" ? setPassword(e.target.value):
            e.target.name === "confirmPsw" ? setConfirmPassword(e.target.value):
            ()=>{}
        )
    }

    const handleClick = (e) => {
        e.preventDefault()
        if (password && confirmPassword) {
            if (password === confirmPassword) {
                setPasswordMatch(true)
            } else {
                setError(true)
                setErrorMsg("password do not match")
            }
        } else {
            setError(true)
            setErrorMsg("check your password fields")
        }
    }

    return (
        <section className="form_container">
            <div className="form">
                <div className="logo_holder">
                    <img src={logo_mobile} alt={logo_mobile} />
                    <img src={second_logo} alt={second_logo} />
                </div>
                <form className="login_form">
                    <div className="form_description">
                        <h4>Reset Password</h4>
                        <p>The password should have at least 6 characters</p>
                    </div>
                    <div className="input_container">
                        <label>New password</label>
                        <div className="input_field">
                            <input type="password" name="psw" placeholder="password" onChange={handleChange} value={password} />
                        </div>
                    </div>
                    <div className="input_container">
                        <label>Confirm password</label>
                        <div className="input_field">
                            <input type="password" name="confirmPsw" placeholder="confirm password" onChange={handleChange} value={confirmPassword} />
                        </div>
                    </div>
                    {
                        error && <p className="error">{errorMsg}</p>
                    }
                    <button className="login_button" type="submit" onClick={handleClick}>Done</button><hr/>
                    <Link className="reset_link" to="/login">Back to login</Link>
                </form>
            </div>
        </section>
    )
}

export default ResetPassword
