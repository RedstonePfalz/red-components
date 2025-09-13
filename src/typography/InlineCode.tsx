import React from "react";

type InlineCode = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
}

/**
 * inline code
 */
const InlineCode: React.FC<InlineCode> = ({ children, ...props }) => {
    return (
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold" {...props}>
            {children}
        </code>
    );
}

export default InlineCode;