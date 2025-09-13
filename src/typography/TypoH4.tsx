import React from "react";

type TypoH4 = React.HTMLAttributes<HTMLHeadingElement> & {
    children: React.ReactNode;
}

/**
 * H4 Title
 */
const TypoH4: React.FC<TypoH4> = ({ children, ...props }) => {
    return (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight" {...props}>
            {children}
        </h4>
    );
}

export default TypoH4;