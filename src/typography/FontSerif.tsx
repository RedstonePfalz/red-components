import React from "react";

interface FontSerif {
    children: React.ReactNode;
}

/**
 * serif font
 */
const FontSerif: React.FC<FontSerif> = ({ children }) => {
    return (
        <div className="font-serif">
            {children}
        </div>
    );
}

export default FontSerif;