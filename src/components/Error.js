import React from 'react'
import error from "../assets/icons/error.svg"

function Error({errorText}) {
    return (
        <div
        style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            fontSize: "0.6em",
        }}
        >
            <img src={error} alt="error-icon" />
            <p
            style={{
                color: "hsla(12, 91%, 46%, 1)",
                marginLeft: "0.6em"
            }}
            >{errorText}</p>
        </div>
    )
}

export default Error
