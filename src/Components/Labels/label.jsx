import React from "react";
import styles from "./label.module.css";

const labelVariantIds = {
    code:   styles['code_variant'],
    tag:    styles['tag_variant'],
    status: "",
    hash:   styles['hash_variant'],
    lightweight: styles['lightweight_variant'],
}

/**
 * 
 * @param {{text: string|undefined, variant: "code"|"tag"|"status"|undefined}} props 
 * @arg {"code"|"tag"|"status"|undefined} variant
 * @returns {ReactNode}
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