"use client"

import React from "react";

interface Invert {
    children: React.ReactNode;
}

/**
 * Applies an invert filter to the children
 */
const Invert: React.FC<Invert> = ({ children }) => {
    return (
        <div className="invert">
            {children}
        </div>
    );
}

export default Invert;