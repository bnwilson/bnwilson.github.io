import React from "react";

const dividerTypes = {
    solid: "1px solid #bbb",
    dotted: "1px dotted #bbb",
    dashed: "1px dashed #bbb"
}

export function Divider (
    props={dividerType: "solid", dividerCssClass: "", opacity: "", width: "100%", orient: "top"}) {
    
    const {dividerType="solid", dividerCssClass, opacity="0.4", width="100%", orient="top"} = props;
    const borderStyleKey = Object.keys(dividerTypes).includes(dividerType) ? dividerType : "solid";
    const borderOrientationKey = orient === "top"? "borderTop" : "borderBottom";
    const borderStyles = {opacity: opacity, width: width};
    borderStyles[borderOrientationKey] = dividerTypes[borderStyleKey];
    
    return (
        <>
            <hr style={{...borderStyles}} className={dividerCssClass} />
        </>
    )
}