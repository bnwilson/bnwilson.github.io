import React from "react";
import styles from "./label.module.css";

const labelVariantIds = {
    code:   styles['code_variant'],
    tag:    styles['tag_variant'],
    status: ""
}

/**
 * 
 * @param {string|undefined} text 
 * @param {"code"|"tag"|"status"|undefined} variant
 * @returns 
 */
export function Label ({text="", variant="status"}) {
    const variantId = (variant && Object.keys(labelVariantIds).includes(variant)) 
        ? labelVariantIds[variant] 
        : "";

    return (
        <label className={ styles.label } id={ variantId }>
            {text}
        </label>
    )
}