import React from "react";

interface TypoH1 {
    children: React.ReactNode;
}

/**
 * H1 Title
 */
const TypoH1: React.FC<TypoH1> = ({ children }) => {
    return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {children}
        </h1>
    );
}

export default TypoH1;