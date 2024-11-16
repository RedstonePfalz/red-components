import React from "react";

interface TypoMuted {
    children: React.ReactNode;
}

/**
 * muted text
 */
const TypoMuted: React.FC<TypoMuted> = ({ children }) => {
    return (
        <p className="text-sm text-muted-foreground">
            {children}
        </p>
    );
}

export default TypoMuted;