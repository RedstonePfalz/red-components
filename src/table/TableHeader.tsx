import React from "react";

type TableHeader = React.HTMLAttributes<HTMLTableCellElement> & {
    children: React.ReactNode;
}

/**
 * table header
 */
const TableHeader: React.FC<TableHeader> = ({ children, ...props }) => {
    return (
        <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right" {...props}>
            {children}
        </th>
    );
}

export default TableHeader;