import React from 'react'
import "../styles/Card.css"

function Card({icon, mainText, subText, bgColor}) {
    return (
        <div className="card-holder">
            <div style={{backgroundColor: `${bgColor}`}}>
                <img src={icon} alt={icon} />
           </div>
            <h4>{mainText}</h4>
            <p>{subText}</p>
        </div>
    )
}

export default Card