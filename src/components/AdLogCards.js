import React from 'react'
import Card from './Card'
import briefcase from "../assets/icons/briefcase.svg"
import sent from "../assets/icons/sent.svg"

function AdLogCards() {
    return (
        <ul className="ad-log">
            <li>
            <Card 
                bgColor={" #FF8B00"}
                icon={sent}
                mainText={"Travel and Logistics"}
                subText={"Make travel requests, get approvals, and have access to travel information."}
            />
            </li>
            <li>
            <Card 
                bgColor={"#008DA6"}
                icon={briefcase}
                mainText={"Asset Management"}
                subText={"Manage the acquisition, assignment, and disposition of assets seamlessly."}
            />
            </li>
        </ul>
    )
}

export default AdLogCards
