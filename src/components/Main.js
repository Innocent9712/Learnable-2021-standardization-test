import React from 'react';
import "../styles/Main.css"
import heroImg from "../assets/img/hero_img.svg"
import employeeDir from "../assets/img/employee_directory.png"
import HrCards from './HrCards';
import AdLogCards from './AdLogCards';

function Main() {
    return (
        <div className= "main">
            <main>
                <section className="hero">
                    <div className="hero-text">
                        <h2>
                            Throw paperwork<br/>into the trash where<br/>it belongs.
                        </h2>
                        <p>
                            Eliminate all the hassle involved in managing people operations by automating it.
                        </p>
                    </div>
                    <img src={heroImg} alt={heroImg} />
                </section>
                <section className="hr">
                    <div className="hr-text">
                        <h3>
                            Human Resources
                        </h3>
                        <p>
                            Onboard new employees, manage the employee lifecycle and measure employee performance.
                        </p>
                    </div>
                    <HrCards />
                    <img src={employeeDir} alt={employeeDir} />
                </section>
                <section className="admin_logistics">
                    <div className="a-l_text">
                        <h3>Admin and Logistics</h3>
                        <p>Manage and track company assets as well as logistics for travelling employees</p>
                    </div>
                    <AdLogCards />
                </section>
            </main>
        </div>
    )
}

export default Main
