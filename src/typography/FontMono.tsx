import React from "react";

type FontMono = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
}

/**
 * mono font
 */
const FontMono: React.FC<FontMono> = ({ children, ...props }) => {
    return (
        <div className="font-mono" {...props}>
            {children}
        </div>
    );
}

export default FontMono;