import React, { useState } from "react";
import styles from "./toggleSwitch.module.css"

export function ToggleSwitch () {
    const [switchPosition, setSwitchPosition] = useState(false)

    const handleToggle = (e) => {
        setSwitchPosition((prev)=>!prev)
        // ... props.onSwitchHandler
    }

    return (
        <div onClick={handleToggle} className={`${styles['toggle-switch']}${switchPosition ? '' : styles.off}`} >
            
        </div>
    )
}

