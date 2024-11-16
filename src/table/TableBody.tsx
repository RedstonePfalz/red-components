import React from "react";

interface TableBody {
    children: React.ReactNode;
}

/**
 * table body
 */
const TableBody: React.FC<TableBody> = ({ children }) => {
    return (
        <tbody>
            {children}
        </tbody>
    );
}

export default TableBody;