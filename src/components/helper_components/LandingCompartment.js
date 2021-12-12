import React from 'react'
import AdLogCard from "./AdLogCards"

// makes use of the Adlog sub section to create some sections in the landing page
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
