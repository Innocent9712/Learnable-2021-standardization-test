import React from 'react'
import Card from './Card'
import briefcase from "../assets/icons/briefcase.svg"
import sent from "../assets/icons/sent.svg"

function AdLogCards() {
    return (
        <ul className="ad-log">
            <li>
            <Card 
                bgColor={"#5243AA"}
                icon={sent}
                mainText={"Employee Management"}
                subText={"From Hiring & Onboarding to Retiring, the Resource Edge Employee Management module  eliminates all the complexities & paperwork involved in managing your team."}
            />
            </li>
            <li>
            <Card 
                bgColor={"#5243AA"}
                icon={briefcase}
                mainText={"Employee Management"}
                subText={"From Hiring & Onboarding to Retiring, the Resource Edge Employee Management module  eliminates all the complexities & paperwork involved in managing your team."}
            />
            </li>
        </ul>
    )
}

export default AdLogCards
