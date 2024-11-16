"use client"

import React from "react";

interface Contrast {
    level: 0 | 50 | 75 | 100 | 125 | 150 | 200;
    children: React.ReactNode;
}

/**
 * Applies a contrast filter to the children
 * @param level 0 | 50 | 75 | 100 | 125 | 150 | 200
 */
const Contrast: React.FC<Contrast> = ({ level, children }) => {
    return (
        <div className={`contrast-${level}`}>
            {children}
        </div>
    );
}

export default Contrast;