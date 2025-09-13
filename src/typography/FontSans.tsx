import React from "react";

type FontSans = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
}

/**
 * sans-serif font
 */
const FontSans: React.FC<FontSans> = ({ children, ...props }) => {
    return (
        <div className="font-sans" {...props}>
            {children}
        </div>
    );
}

export default FontSans;