import React from "react";

interface TypoQuote {
    children: React.ReactNode;
}

/**
 * a blockquote formatted text
 */
const TypoQuote: React.FC<TypoQuote> = ({ children }) => {
    return (
        <blockquote className="mt-6 border-1-2 pl-6 italic">
            {children}
        </blockquote>
    );
}

export default TypoQuote;