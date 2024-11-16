"use client"

import React from "react";

interface Saturate {
    level: 0 | 50 | 100 | 150 | 200;
    children: React.ReactNode;
}

/**
 * Applies a saturate filter to the children
 * @param level 0 | 50 | 100 | 150 | 200
 */
const Saturate: React.FC<Saturate> = ({ level, children }) => {
    return (
        <div className={`saturate-${level}`}>
            {children}
        </div>
    );
}

export default Saturate;