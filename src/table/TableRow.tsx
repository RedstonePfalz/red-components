import React from "react";

interface TableRow {
    children: React.ReactNode;
}

/**
 * table row
 */
const TableRow: React.FC<TableRow> = ({ children }) => {
    return (
        <tr className="m-0 border-t p-0 even:bg-muted">
            {children}
        </tr>
    );
}

export default TableRow;