import React from "react";

type TypoH2 = React.HTMLAttributes<HTMLHeadingElement> & {
    children: React.ReactNode;
}

/**
 * H2 Title
 */
const TypoH2: React.FC<TypoH2> = ({ children, ...props }) => {
    return (
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0" {...props}>
            {children}
        </h2>
    );
}

export default TypoH2;
