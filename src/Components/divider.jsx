import React from "react";

const dividerTypes = {
    solid: "1px solid #bbb",
    dotted: "1px dotted #bbb",
    dashed: "1px dashed #bbb"
}

export function Divider (props={dividerType: "solid", dividerCssClass: "", opacity: ""}) {
    
    const {dividerType="solid", dividerCssClass, opacity="0.4"} = props;
    const borderStyleKey = Object.keys(dividerTypes).includes(dividerType) ? dividerType : "solid";
    const borderStyles = {borderTop: dividerTypes[borderStyleKey], opacity: opacity, width: "100%"};
    
    return (
        <>
            <hr style={{...borderStyles}} className={dividerCssClass} />
        </>
    )
}