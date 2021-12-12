import React,{useState, useEffect, useContext} from 'react'
import { GlobalState } from '../../App'
import { Link } from 'react-router-dom'
import logo_mobile from "../../assets/icons/logo_mobile.svg"
import check from "../../assets/icons/check.svg"
import second_logo from "../../assets/icons/second_logo.svg"
import reset_check from "../../assets/icons/reset_check.svg"
import Error from '../helper_components/Error'
import "../../styles/Login.css"

function ResetPassword() {
    // variables
    const [email, setEmail] = useState("")
    const globalContext = useContext(GlobalState)
    const {globalState, globalDispatch} = globalContext
    const [userDetails, setUserDetails] = useState({
        email:"",
        password:""
    })
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [passwordMatch, setPasswordMatch] = useState(false)

    // show and remove error message
    useEffect(() => {
        const clearError = setTimeout((error) => {
            setError(false)
        }, 3000);
        return () => {
            clearTimeout(clearError)
        }
    }, [error])

    // handle changes to input field
    const handleChange = (e) => {    
        console.log(e.target.value)
        if (e.target.name==="email") {
            checkEmail(e.target.value)
            setEmail(e.target.value)
        } else if (e.target.name === "psw" ) {
            setPassword(e.target.value)
        } else if (   e.target.name === "confirmPsw") {
            setConfirmPassword(e.target.value)
        } else {
            return
        }
    }

    // handle submit responses
    const handleClick = (e) => {
        e.preventDefault()
        if (!userDetails.email) {
            if (!email) {
                setError(true)
                setErrorMsg("please type in your email")                
            } else if (email && isEmailValid) {
                if (email === globalState.user.email) {
                    setError(false)
                    setUserDetails((prevState)=>(
                        {
                            ...prevState,
                            email:email
            
                        }
                    )) 
                setEmail("")         
                } else {
                    setError(true)
                    setErrorMsg("email is not registered, you must be logged in to reset password.")
                }
            } else if (email && !isEmailValid) {
                setError(true)
                setErrorMsg("email is invalid")
            }
        } else if (password && confirmPassword) {
            if (password === confirmPassword) {
                if (password.length < 6) {
                    setError(true)
                    setErrorMsg("password length should be more than 6 letters.")
                } else {
                    setPasswordMatch(true)
                    setUserDetails((prevState)=>(
                        {
                            ...prevState,
                            password:password
            
                        }
                    )) 
                    globalDispatch({type: "auth/changePassword", payload: userDetails.password })
                }
            } else {
                setError(true)
                setErrorMsg("password do not match")
            }
        } else {
            setError(true)
            setErrorMsg("check your password fields")
        }
    }

    // tests for email validity
    const checkEmail = (value) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
            setIsEmailValid(true)
        } else {
            setIsEmailValid(false)
        }
    }

    return (
        <div className="fullPage">
            <section className="form_container">
                <div className="form">
                    <div className="logo_holder">
                        <img src={logo_mobile} alt={logo_mobile} />
                        <img src={second_logo} alt={second_logo} />
                    </div>
                    <form className="login_form">
                        {
                            userDetails.password ? (
                                <div className="reset_confirmed">
                                    <div className="form_description">
                                        <h4>Reset Password</h4>
                                    </div>
                                    <img src={reset_check} alt="reset confirmed" />
                                    <p>A recovery email has been sent to your email address. </p>
                                </div>
                            ) : (
                                <div>
                                    <div className="form_description">
                                        <h4>Reset Password</h4>
                                        <p>{userDetails.email ? "The password should have at least 6 characters": "To enable us reset your password, enter your email below"}</p>
                                    </div>
                
                                    {
                                        userDetails.email? (
                                            <div>
                                                <div className="input_container">
                                                    <label>New password</label>
                                                    <div className={`input_field ${error ? "input_error": undefined}`}>
                                                        <input type="password" name="psw" placeholder="password" onChange={handleChange} value={password} />
                                                    </div>
                                                </div>
                                                <div className="input_container">
                                                    <label>Confirm password</label>
                                                    <div className={`input_field ${error ? "input_error": undefined}`}>
                                                        <input type="password" name="confirmPsw" placeholder="confirm password" onChange={handleChange} value={confirmPassword} />
                                                    </div>
                                                </div>
                
                                            </div>
                                        ) : (
                                            <div className="input_container">
                                            <label>Email Address</label>
                                            <div className={`input_field ${error ? "input_error" : undefined}`}>
                
                                                <input type="email" name="email"placeholder="Enter email" onChange={handleChange} value={email} />
                                                <img className={`check ${isEmailValid?"show":"hide"}`} src={check} alt={check} />
                                            </div>
                                        </div>
                                        )
                                    }
                                    {
                                        error && <Error errorText={errorMsg} />
                
                                    }
                                    <button className="login_button" type="submit" onClick={handleClick}>{userDetails.email?"Done": "Next"}</button>
                                </div>
                            )
                        }
                        
                        <hr/>
                        <Link className="reset_link" to="/login">Back to login</Link>
                    </form>
                </div>
            </section>

        </div>
    )
}

export default ResetPassword
