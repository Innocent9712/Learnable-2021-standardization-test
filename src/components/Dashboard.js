import React,{useState} from 'react'
import hamburger from "../assets/icons/hamburger.svg"
import close from "../assets/icons/cross.svg"
import second_logo from "../assets/icons/second_logo.svg"
import profile from "../assets/icons/profile_img.svg"
import employee from "../assets/icons/employee.svg"
import "../styles/Dashboard.css"


const DashHeader = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div class="header">
            <header className="dashboard_header">
                <div className="profile">
                    <button><img src={isOpen?close:hamburger} alt="menu" /></button>
                    <div>
                        <img src={second_logo} alt="logo" />
                        <h4>TM Dashboard</h4>
                    </div>
                </div>
                <div className="profile_img">
                    <img src={profile} alt="profile_img" />

                </div>
            </header>
            <aside>
                <div>
                    <h3>
                        John Doe
                    </h3>
                    <h3>
                        Profile
                    </h3>
                </div>
                <div>
                    <p>Use Resource Edge as</p>
                    <button>
                        <div>
                            <img src={employee} alt={employee}/>
                        </div>
                        Talent Manager
                    </button>
                </div>
            </aside>
        </div>
    )
}

function Dashboard() {
    return (
        <div>
            <DashHeader />
        </div>
    )
}

export default Dashboard
