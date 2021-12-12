import React from 'react'
import Card from './Card'

// function to create similar sub sections on the landing page
function AdLogCards({card1, card2}) {
    return (
        <ul className="ad-log">
            <li>
            <Card 
                bgColor={card1.cardBg}
                icon={card1.cardIcon}
                mainText={card1.cardMT}
                subText={card1.cardST}
            />
            </li>
            <li>
            <Card 
                bgColor={card2.cardBg}
                icon={card2.cardIcon}
                mainText={card2.cardMT}
                subText={card2.cardST}
            />
            </li>
        </ul>
    )
}

export default AdLogCards
