import React from "react"
import { Label } from "./label"

const labelsCssStyles = {
    alignContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "0 auto",

    width: "90%"
}

export function Labels ({children}) {

    return (
        <span style={labelsCssStyles} >
            {children}
        </span>
    )
}