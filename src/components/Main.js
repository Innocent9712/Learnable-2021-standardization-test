import React from 'react';
import "../styles/Main.css"
import heroImg from "../assets/img/hero_img.svg"
import employeeDir from "../assets/img/employee_directory.png"
import direct_report from "../assets/img/Direct_Reports - List.png"
import HrCards from './HrCards';
import AdLogCards from './AdLogCards';
import tenece from "../assets/img/tenece.png"
import unn from "../assets/img/unn.png"
import private_estates from "../assets/img/private_estates.png"
import genesys from "../assets/img/genesys.png"


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
                    <img src={direct_report} alt={direct_report} />
                </section>
                <section className="finance">
                    <div className="finance_text">
                        <h3>Finance</h3>
                        <p>Generate invoices, track expenditure, and manage complex payrolls for multiple teams and companies</p>
                    </div>
                </section>
                <ul className="support">
                    <li>
                        <img src={unn} alt={unn} />
                    </li>
                    <li>
                        <img src={genesys} alt={genesys} />
                    </li>
                    <li>
                        <img src={private_estates} alt={private_estates} />
                    </li>
                    <li>
                        <img src={tenece} alt={tenece} />
                    </li>
                </ul>
            </main>
        </div>
    )
}

export default Main
