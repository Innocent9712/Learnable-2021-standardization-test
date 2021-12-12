import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../../App'
import { useNavigate } from 'react-router'
import Error from '../helper_components/Error'
import logo_mobile from "../../assets/icons/logo_mobile.svg"
import second_logo from "../../assets/icons/second_logo.svg"
import check from "../../assets/icons/check.svg"
import watch from "../../assets/icons/watch.svg"
import watch_filled from "../../assets/icons/watch-filled.svg"
import edit from "../../assets/icons/edit.svg"
import "../../styles/Login.css"

function Login() {
    // variables
    const globalContext = useContext(GlobalState)
    const {globalDispatch} = globalContext
    const [userDetails, setUserDetails] = useState({
        email:"",
        password:""
    })

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [error, setError] = useState(false)
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    // show and remove error message
    useEffect(() => {
            const clearError = setTimeout((error) => {
                setError(false)
                setErrorMsg("")
            }, 3000);
        return () => {
            clearTimeout(clearError)
        }
    }, [error])

    // handle changes to input field
    const handleChange = (e) => {
        checkEmail()
        return (
            e.target.name === "email" ? setEmail(e.target.value):
            e.target.name === "psw" ? setPassword(e.target.value):
            ()=>{}
        )
    }

    // tests for email validity
    const checkEmail = () => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setIsEmailValid(true)
        } else {
            setIsEmailValid(false)
        }
    }


    // handle submit responses
    const handleClick = (e) => {
        e.preventDefault()
        if (email && isEmailValid && !userDetails.email) {
            setError(false)
            setUserDetails((prevState)=>(
                {
                    ...prevState,
                    email:email
    
                }
            )) 
        }   else if (!isEmailValid && !password) {
                setError(true)
                setErrorMsg("check email input")
        }   else if (password && password.length < 8) {
                setError(true)
                setErrorMsg("password length should be more than 6 letters.")
        }   else if (password && password.length > 6) {
                setError(false)
                setUserDetails((prevState)=>(
                    {
                        ...prevState,
                        password:password 
                    }
                )) 
                globalDispatch({type: "auth/signIn", payload:{email: userDetails.email, password:userDetails.password}})  
                setEmail("")         
                setPassword("")
                navigate("/dashboard")             
        } else if (email && !password) {
            setError(true)
            setErrorMsg("password is empty")
        }
    }
    return (
        <div className="fullPage login_fullPage">
            <section className="form-container">
                <div className="form">
                    <div className="logo_holder">
                        <img src={logo_mobile} alt={logo_mobile} />
                        <img src={second_logo} alt={second_logo} />
                    </div>
                    <form className="login_form">
                        <div className="form_description">
                            <h4>Log In</h4>
                            <p>Access your resource edge account</p>
                        </div>
                        {userDetails.email &&
                            <div className="userEmail_container">
                                <div className="userEmail_text">
                                    <h5>John Doe</h5>
                                    <p>{userDetails.email}</p>
                                </div>
                                <img src={edit} alt={edit}/>
                            </div>
                        }
                        {
                            !userDetails.email ? (
                                <div className="input_container">
                                    <label>Email Address</label>
                                    <div className={`input_field ${error ? "input_error" : undefined}`}>

                                        <input type="email" name="email"placeholder="Enter email" onChange={handleChange} value={email} />
                                        <img className={`check ${isEmailValid?"show":"hide"}`} src={check} alt={check} />
                                    </div>
                                </div>

                            ) : (
                                <div className="password_container">
                                    <label>Password</label>
                                    <div className={`input_field ${error ? "input_error" : undefined}`}>
                                        <input  type={`${showPassword?"text":"password"}`} name="psw" placeholder="password" onChange={handleChange} value={password} />
                                        <img className="watch" src={showPassword?watch_filled:watch} alt={watch} onClick={()=>(setShowPassword(!showPassword))}/>
                                    </div>
                                </div>
                            )
                        }
                        {
                            error && <Error errorText={errorMsg} />
                        }
                        <button className="login_button" type={userDetails.email && "submit"} onClick={handleClick}>{userDetails.email?"Done":"Next"}</button><hr/>
                        <Link className="reset_link" to="/reset_password">Forgot password?</Link>
                    </form>
                </div>

            </section>

        </div>
    )
}

export default Login
