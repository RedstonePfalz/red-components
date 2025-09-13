import React from "react";

type FontSerif = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
}

/**
 * serif font
 */
const FontSerif: React.FC<FontSerif> = ({ children, ...props }) => {
    return (
        <div className="font-serif" {...props}>
            {children}
        </div>
    );
}

export default FontSerif;