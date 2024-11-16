"use client"

import React from "react";

interface HueRotate {
    level: 0 | 15 | 30 | 60 | 90 | 180;
    children: React.ReactNode;
}

/**
 * Applies a hue-rotate filter to the children
 * @param level 0 | 15 | 30 | 60 | 90 | 180;
 */
const HueRotate: React.FC<HueRotate> = ({ level, children }) => {
    return (
        <div className={`hue-rotate-${level}`}>
            {children}
        </div>
    );
}

export default HueRotate;