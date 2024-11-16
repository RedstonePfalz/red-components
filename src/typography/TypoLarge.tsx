import React from "react";

interface TypoLarge {
    children: React.ReactNode;
}

/**
 * large text
 */
const TypoLarge: React.FC<TypoLarge> = ({ children }) => {
    return (
        <div className="text-lg font-semibold">
            {children}
        </div>
    );
}

export default TypoLarge;