"use client"

import React from "react";

type SelectControl = React.HTMLAttributes<HTMLDivElement> & {
    type: "auto" | "all" | "text" | "none";
    children: React.ReactNode;
}

/**
 * Change if the user should be able to select text or not
 * @param type "auto" | "all" | "text" | "none"
 * @constructor
 */
const SelectControl: React.FC<SelectControl> = ({ type, children, ...props }) => {
    return (
        <div className={`select-${type}`} {...props}>
            {children}
        </div>
    )
}

export default SelectControl;