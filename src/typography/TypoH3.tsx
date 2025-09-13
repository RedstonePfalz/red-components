import React from "react";

type TypoH3 = React.HTMLAttributes<HTMLHeadingElement> & {
    children: React.ReactNode;
}

/**
 * H3 Title
 */
const TypoH3: React.FC<TypoH3> = ({ children, ...props }) => {
    return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight" {...props}>
            {children}
        </h3>
    );
}

export default TypoH3;