import React from "react";

type TableHead = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
}

/**
 * table head
 */
const TableHead: React.FC<TableHead> = ({ children, ...props }) => {
    return (
        <thead {...props}>
            {children}
        </thead>
    );
}

export default TableHead;