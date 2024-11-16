import React from "react";

interface FontMono {
    children: React.ReactNode;
}

/**
 * mono font
 */
const FontMono: React.FC<FontMono> = ({ children }) => {
    return (
        <div className="font-mono">
            {children}
        </div>
    );
}

export default FontMono;