import React from "react";

interface InlineCode {
    children: React.ReactNode;
}

/**
 * inline code
 */
const InlineCode: React.FC<InlineCode> = ({ children }) => {
    return (
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            {children}
        </code>
    );
}

export default InlineCode;