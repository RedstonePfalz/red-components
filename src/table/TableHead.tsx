import React from "react";

interface TableHead {
    children: React.ReactNode;
}

/**
 * table head
 */
const TableHead: React.FC<TableHead> = ({ children }) => {
    return (
        <thead>
            {children}
        </thead>
    );
}

export default TableHead;