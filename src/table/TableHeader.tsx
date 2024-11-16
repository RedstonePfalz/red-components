import React from "react";

interface TableHeader {
    children: React.ReactNode;
}

/**
 * table header
 */
const TableHeader: React.FC<TableHeader> = ({ children }) => {
    return (
        <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
            {children}
        </th>
    );
}

export default TableHeader;