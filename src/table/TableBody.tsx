import React from "react";

type TableBody = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
}

/**
 * table body
 */
const TableBody: React.FC<TableBody> = ({ children, ...props }) => {
    return (
        <tbody {...props}>
            {children}
        </tbody>
    );
}

export default TableBody;