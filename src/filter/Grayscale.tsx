"use client"

import React from "react";

interface Grayscale {
    children: React.ReactNode;
}

/**
 * Applies a grayscale filter to the children
 */
const Grayscale: React.FC<Grayscale> = ({ children }) => {
    return (
        <div className="grayscale">
            {children}
        </div>
    );
}

export default Grayscale;