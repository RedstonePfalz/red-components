import React from "react";

interface TypoSmall {
    children: React.ReactNode;
}

/**
 * small text
 */
const TypoSmall: React.FC<TypoSmall> = ({ children }) => {
    return (
        <small className="text-sm font-medium leading-none">
            {children}
        </small>
    );
}

export default TypoSmall;