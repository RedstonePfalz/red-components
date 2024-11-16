"use client"

import React from "react";

interface SelectControl {
    type: "auto" | "all" | "text" | "none";
    children: React.ReactNode;
}

/**
 * Change if the user should be able to select text or not
 * @param type "auto" | "all" | "text" | "none"
 * @constructor
 */
const SelectControl: React.FC<SelectControl> = ({ type, children }) => {
    return (
        <div className={`select-${type}`}>
            {children}
        </div>
    )
}

export default SelectControl;