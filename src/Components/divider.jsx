import React from "react";

const dividerTypes = {
    solid: "3px solid #bbb",
    dotted: "3px dotted #bbb",
    dashed: "3px dashed #bbb"
}

export function Divider (props={dividerType: "solid", dividerCssClass: ""}) {
    const {dividerType, dividerCssClass} = props;
    const borderStyleKey = Object.keys(dividerTypes).includes(dividerType) ? dividerType : "solid";
    const borderStyle = {borderTop: dividerTypes[borderStyleKey]};
    
    return (
        <>
            <hr style={borderStyle} className={dividerCssClass} />
        </>
    )
}