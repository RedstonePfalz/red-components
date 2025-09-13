import React from "react";

type TypoP = React.HTMLAttributes<HTMLParagraphElement> & {
    children: React.ReactNode;
}

/**
 * normal text
 */
const TypoP: React.FC<TypoP> = ({ children, ...props }) => {
    return (
        <p className="leading-7 [&:not(:first-child)]:mt-6" {...props}>
            {children}
        </p>
    );
}

export default TypoP;