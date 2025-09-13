import React from "react";

type TypoSmall = React.HTMLAttributes<HTMLDetailsElement> & {
    children: React.ReactNode;
}

/**
 * small text
 */
const TypoSmall: React.FC<TypoSmall> = ({ children, ...props }) => {
    return (
        <small className="text-sm font-medium leading-none" {...props}>
            {children}
        </small>
    );
}

export default TypoSmall;