import React from 'react';
import "../styles/Main.css"
import heroImg from "../assets/img/hero_img.svg"
import employeeDir from "../assets/img/employee_directory.png"
import direct_report from "../assets/img/Direct_Reports - List.png"
import payroll from "../assets/img/payroll.png"
import HrCards from './HrCards';
import AdLogCards from './AdLogCards';
import tenece from "../assets/img/tenece.png"
import unn from "../assets/img/unn.png"
import private_estates from "../assets/img/private_estates.png"
import genesys from "../assets/img/genesys.png"
import LandingCompartment from './LandingCompartment';
import sent from "../assets/icons/sent.svg"
import briefcase from "../assets/icons/briefcase.svg"
import pay from "../assets/icons/pay.svg"
import task_list from "../assets/icons/task-list.svg"




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
                <section className="big_cont">
                    <LandingCompartment 
                        sectionClass={"admin_logistics"}
                        divClass={"a-l_text"}
                        h3Text={"Admin and Logistics"}
                        pText={"Manage and track company assets as well as logistics for travelling employees"}
                        imgName={direct_report}
                        altText={"direct report"}
                        card1={{
                            cardBg:"#FF8B00",
                            cardIcon: sent,
                            cardMT: "Travel and Logistics",
                            cardST: "Make travel requests, get approvals, and have access to travel information."
                        }}
                        card2={{
                            cardBg:"#008DA6",
                            cardIcon: briefcase,
                            cardMT: "Asset Management",
                            cardST: "Manage the acquisition, assignment, and disposition of assets seamlessly."
                        }}
                    />
                    <LandingCompartment 
                        sectionClass={"finance"}
                        divClass={"finance_text"}
                        h3Text={"Finance"}
                        pText={"Generate invoices, track expenditure, and manage complex payrolls for multiple teams and companies"}
                        imgName={payroll}
                        altText={"direct report"}
                        card1={{
                            cardBg:"#0052CC",
                            cardIcon: task_list,
                            cardMT: "RE Voucher",
                            cardST: "Track and manage expenditure for multiple teams across your organization using Resource Edge Vouchers"
                        }}
                        card2={{
                            cardBg:"#008DA6",
                            cardIcon: pay,
                            cardMT: "Payroll",
                            cardST: "Our easy to use systems takes away the pain of managing complex payrolls for organizations of all sizes."
                        }}
                    
                    />
                    <ul className="support">
                        
                        <li>
                            <a href="https://www.unn.edu.ng/" target="_blank" rel="noreferrer">
                                <img src={unn} alt={unn} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.genesystechhub.com/" target="_blank" rel="noreferrer">
                                <img src={genesys} alt={genesys} />
                            </a>
                        </li>
                        <li>
                            <a href="http://www.privateestates.co.za/waaboutus.html" target="_blank" rel="noreferrer">
                            <img  src={private_estates} alt={private_estates} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.tenece.com/" target="_blank" rel="noreferrer">
                                <img src={tenece} alt={tenece} />
                            </a>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    )
}

export default Main
