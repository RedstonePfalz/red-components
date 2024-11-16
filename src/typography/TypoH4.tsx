import React from "react";

interface TypoH4 {
    children: React.ReactNode;
}

/**
 * H4 Title
 */
const TypoH4: React.FC<TypoH4> = ({ children }) => {
    return (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {children}
        </h4>
    );
}

export default TypoH4;