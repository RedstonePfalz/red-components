import React from "react";

interface TableHeader {
    children: React.ReactNode;
}

/**
 * table content
 */
const TableHeader: React.FC<TableHeader> = ({ children }) => {
    return (
        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
            {children}
        </td>
    );
}

export default TableHeader;