import React from 'react'
import AdLogCard from "./AdLogCards"

// cardBg, cardIcon, cardMT, cardST

function LandingCompartment({sectionClass, divClass, h3Text, pText, imgName, altText, card1, card2}) {
    return (
        <section className={`landing_compartment ${sectionClass}`}>
            <div className={`lc_text ${divClass}`}>
                <div>
                    <h3>{h3Text}</h3>
                    <p>{pText}</p>
                </div>
                <AdLogCard card1={card1} card2={card2} />
            </div>
                <img src={imgName} alt={altText} />
        </section>
    )
}

export default LandingCompartment
