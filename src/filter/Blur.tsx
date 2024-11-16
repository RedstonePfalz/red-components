"use client"

import React from "react";

interface Blur {
    intensity?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
    children: React.ReactNode;
}

/**
 * Applies a blur filter to the children
 */
const Blur: React.FC<Blur> = ({ intensity, children }) => {

    const blurClass = intensity ? `blur-${intensity}` : "blur";

    return (
        <div className={blurClass}>
            {children}
        </div>
    );
}

export default Blur;