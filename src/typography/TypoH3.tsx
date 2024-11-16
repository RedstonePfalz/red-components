import React from "react";

interface TypoH3 {
    children: React.ReactNode;
}

/**
 * H3 Title
 */
const TypoH3: React.FC<TypoH3> = ({ children }) => {
    return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {children}
        </h3>
    );
}

export default TypoH3;