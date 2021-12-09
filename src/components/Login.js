import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router'
import logo_mobile from "../assets/icons/logo_mobile.svg"
import second_logo from "../assets/icons/second_logo.svg"
import check from "../assets/icons/check.svg"
import watch from "../assets/icons/watch.svg"
import watch_filled from "../assets/icons/watch-filled.svg"
import edit from "../assets/icons/edit.svg"
import "../styles/Login.css"
import { Link } from 'react-router-dom'

function Login() {
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

    const handleChange = (e) => {
        checkEmail()
        return (
            e.target.name === "email" ? setEmail(e.target.value):
            e.target.name === "psw" ? setPassword(e.target.value):
            ()=>{}
        )
    }

    const checkEmail = () => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setIsEmailValid(true)
        } else {
            setIsEmailValid(false)
        }
    }

    useEffect(() => {
            const clearError = setTimeout((error) => {
                setError(false)
            }, 3000);
        return () => {
            clearTimeout(clearError)
        }
    }, [error])


    const handleClick = (e) => {
        e.preventDefault()
        if (email && isEmailValid) {
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
        }   else if (email && password) {
            if (password.length < 6) {
                setError(true)
                setErrorMsg("password length should be more than 6 letters.")
            } else {
                setError(false)
                setUserDetails((prevState)=>(
                    {
                        ...prevState,
                        password:password 
                    }
                ))                
            }
            setEmail("")         
            setPassword("")
            navigate("/dashboard")
        } else if (email && !password) {
            setError(true)
            setErrorMsg("password is empty")
        }
    }
    return (
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
                                <div class="input_field">
                                    <input type="email" name="email"placeholder="Enter email" onChange={handleChange} value={email} />
                                    <img className={`check ${isEmailValid?"show":"hide"}`} src={check} alt={check} />
                                </div>
                            </div>

                        ) : (
                            <div className="password_container">
                                <label>Password</label>
                                <div className="input_field">
                                    <input type={`${showPassword?"text":"password"}`} name="psw" placeholder="password" onChange={handleChange} value={password} />
                                    <img className="watch" src={showPassword?watch_filled:watch} alt={watch} onClick={()=>(setShowPassword(!showPassword))}/>
                                </div>
                            </div>
                        )
                    }
                    {
                        error && <p className="error">{errorMsg}</p>
                    }
                    <button className="login_button" type={userDetails.email && "submit"} onClick={handleClick}>{userDetails.email?"Done":"Next"}</button><hr/>
                    <Link className="reset_link" to="/reset_password">Forgot password?</Link>
                </form>
            </div>

        </section>
    )
}

export default Login
