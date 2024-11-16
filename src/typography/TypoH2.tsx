import React from "react";

interface TypoH2 {
    children: React.ReactNode;
}

/**
 * H2 Title
 */
const TypoH2: React.FC<TypoH2> = ({ children }) => {
    return (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {children}
        </h2>
    );
}

export default TypoH2;