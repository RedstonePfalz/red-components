import React from "react";

type TableRow = React.HTMLAttributes<HTMLTableRowElement> & {
    children: React.ReactNode;
}

/**
 * table row
 */
const TableRow: React.FC<TableRow> = ({ children, ...props }) => {
    return (
        <tr className="m-0 border-t p-0 even:bg-muted" {...props}>
            {children}
        </tr>
    );
}

export default TableRow;