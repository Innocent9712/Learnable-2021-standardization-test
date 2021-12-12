import React from 'react'
import "../../styles/Card.css"

// function to create a card that is used a couple of times in the landing page
function Card({icon, mainText, subText, bgColor}) {
    return (
        <div className="card-holder">
            <div style={{backgroundColor: `${bgColor}`}}>
                <img src={icon} alt={icon} />
           </div>
            <h4 style={{color: "hsla(218, 76%, 15%, 1)"}}>{mainText}</h4>
            <p>{subText}</p>
        </div>
    )
}

export default Card