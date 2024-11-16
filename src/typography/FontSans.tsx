import React from "react";

interface FontSans {
    children: React.ReactNode;
}

/**
 * sans-serif font
 */
const FontSans: React.FC<FontSans> = ({ children }) => {
    return (
        <div className="font-sans">
            {children}
        </div>
    );
}

export default FontSans;