import React from 'react'
import Card from './Card';
import team from "../assets/icons/team.svg"
import goal from "../assets/icons/goal.svg"
import calender from "../assets/icons/calendar.svg"
import "../styles/HrCards.css"


function HrCards() {
    return (
        <ul className="hr-cards">
        <li>
            <Card 
                bgColor={"#5243AA"}
                icon={team}
                mainText={"Employee Management"}
                subText={"From Hiring & Onboarding to Retiring, the Resource Edge Employee Management module  eliminates all the complexities & paperwork involved in managing your team."}
            />
        </li>
        <li>
            <Card 
                bgColor={"#008DA6"}
                icon={goal}
                mainText={"Performance Management"}
                subText={"Manage and track employee performance with our easy-to-use tools for goal setting, performance agreements and performance reviews."}
            />
        </li>
        <li>
            <Card 
                bgColor={"#42526E"}
                icon={calender}
                mainText={"Paid time off"}
                subText={"Employees can request for paid time off, vacations, sick leaves or educational leaves and get approvals all within Resource Edge. HR managers can equally ensure compliance."}
            />
        </li>    
    </ul>
    )
}

export default HrCards
