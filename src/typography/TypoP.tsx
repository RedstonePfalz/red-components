import React from "react";

interface TypoP {
    children: React.ReactNode;
}

/**
 * normal text
 */
const TypoP: React.FC<TypoP> = ({ children }) => {
    return (
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            {children}
        </p>
    );
}

export default TypoP;