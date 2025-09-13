import React from "react";

type TypoH1 = React.HTMLAttributes<HTMLHeadingElement> & {
    children: React.ReactNode;
}

/**
 * H1 Title
 */
const TypoH1: React.FC<TypoH1> = ({ children, ...props }) => {
    return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" {...props}>
            {children}
        </h1>
    );
}

export default TypoH1;