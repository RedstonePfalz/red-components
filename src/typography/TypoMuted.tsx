import React from "react";

type TypoMuted = React.HTMLAttributes<HTMLParagraphElement> & {
    children: React.ReactNode;
}

/**
 * muted text
 */
const TypoMuted: React.FC<TypoMuted> = ({ children, ...props }) => {
    return (
        <p className="text-sm text-muted-foreground" {...props}>
            {children}
        </p>
    );
}

export default TypoMuted;