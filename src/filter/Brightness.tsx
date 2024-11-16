"use client"

import React from "react";

interface Brightness {
    level: 0 | 50 | 75 | 90 | 95 | 100 | 105 | 110 | 125 | 150 | 200;
    children: React.ReactNode;
}

/**
 * Applies a brightness filter to the children
 * @param level 0 | 50 | 75 | 90 | 95 | 100 | 105 | 110 | 125 | 150 | 200
 */
const Brightness: React.FC<Brightness> = ({ level, children }) => {
    return (
        <div className={`brightness-${level}`}>
            {children}
        </div>
    );
}

export default Brightness;