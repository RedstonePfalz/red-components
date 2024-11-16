"use client"

import React from "react";

interface Sepia {
    children: React.ReactNode;
}

/**
 * Applies a sepia filter to the children
 */
const Sepia: React.FC<Sepia> = ({ children }) => {
    return (
        <div className="sepia">
            {children}
        </div>
    );
}

export default Sepia;