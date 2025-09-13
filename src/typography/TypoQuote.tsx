import React from "react";

type TypoQuote = React.HTMLAttributes<HTMLQuoteElement> & {
    children: React.ReactNode;
}

/**
 * a blockquote formatted text
 */
const TypoQuote: React.FC<TypoQuote> = ({ children, ...props }) => {
    return (
        <blockquote className="mt-6 border-1-2 pl-6 italic" {...props}>
            {children}
        </blockquote>
    );
}

export default TypoQuote;