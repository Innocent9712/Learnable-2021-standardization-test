import React,{useState, useContext} from 'react'
import { GlobalState } from '../../App'
import hamburger from "../../assets/icons/hamburger.svg"
import close from "../../assets/icons/cross.svg"
import second_logo from "../../assets/icons/second_logo.svg"
import profile from "../../assets/icons/profile_img.svg"
import employee from "../../assets/icons/employee.svg"
import circle from "../../assets/icons/Circle - empty.svg"
import check from "../../assets/icons/check1.svg"
import "../../styles/Dashboard.css"


const DashHeader = () => {
    const [isOpen, setIsOpen] = useState(false)

    // contextApi
    const globalContext = useContext(GlobalState)
    const {globalState, globalDispatch} = globalContext

    const handleNav = () => {
        setIsOpen(!isOpen)
    }

    const useAsCheckFnc = () => (
        globalState.userTypes.map(type=>{
            if (type.status) {
                return globalState.userTypes.indexOf(type)
            } else {
                return null
            }
        })
    )

    const useAsCheck = useAsCheckFnc()

    const changeOption = (id) => {
        globalDispatch({type:"status/userType", payload:id})
    }
    

    return (
        <div className="header">
            <header className="dashboard_header">
                <div className="profile">
                    <button onClick={handleNav}><img src={isOpen?close:hamburger} alt="menu" /></button>
                    <div>
                        <img src={second_logo} alt="logo" />
                        <h4>{`${useAsCheck[0] === 0 ? "TM" : "Employee"} Dashboard`}</h4>
                    </div>
                </div>
                <div className="profile_img">
                    <img src={profile} alt="profile_img" />

                </div>
            </header>
            <aside className={isOpen ? "showNav": null}>
                <div className="user_details">
                    <h3>
                        {globalState.user.name}
                    </h3>
                    <h3>
                        Profile
                    </h3>
                </div>
                <div className="options">
                    <p>Use Resource Edge as</p>
                    <div className="options_button" onClick={()=>changeOption(1)}>
                        <div className="employee one">
                            <img src={employee} alt={employee}/>
                        </div>
                        <p>Employee</p>
                        <img className={`${useAsCheck[1] === 1 ? "show": "checkName"}`} src={check} alt={check} />
                    </div>
                    <div className="options_button" onClick={()=>changeOption(0)}>
                        <div className="employee two">
                            <img src={employee} alt={employee}/>
                        </div>
                        <p>Talent Manager</p>
                        <img className={`${useAsCheck[0] === 0 ? "show" : "checkName"}`} src={check} alt={check} />
                    </div>
                </div><hr/>
                <button onClick={()=>{globalDispatch({type:"auth/logout"})}} className="dashboard_logout">Logout</button>
            </aside>
        </div>
    )
}

function Dashboard() {
    const globalContext = useContext(GlobalState)
    const {globalState} = globalContext
    return (
        <div className="dashboard_container">
            <DashHeader />
            <main>
                <div className="dashboard_content">
                    <div className="greeting">
                        <h2>{`Hello, ${globalState.user.name}`}</h2>
                        <p>Welcome and good to have you back.</p>
                    </div>
                    <div>
                        <h2>Things to do</h2>
                        <div className="things thing1">
                            <img src={circle} alt="checkbox" />
                            <p>Upload your employee performance agreement</p>
                            <button>Begin</button>
                        </div>
                        <div className="things thing2">
                            <img src={circle} alt="checkbox" />
                            <p>Start quarterly self review</p>
                            <button>Resume</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard
