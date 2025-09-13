import React from "react";

type TypoLarge = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
}

/**
 * large text
 */
const TypoLarge: React.FC<TypoLarge> = ({ children, ...props }) => {
    return (
        <div className="text-lg font-semibold" {...props}>
            {children}
        </div>
    );
}

export default TypoLarge;