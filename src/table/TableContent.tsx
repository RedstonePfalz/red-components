import React from "react";

type TableHeader = React.HTMLAttributes<HTMLTableCellElement> & {
    children: React.ReactNode;
}

/**
 * table content
 */
const TableContent: React.FC<TableHeader> = ({ children, ...props }) => {
    return (
        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right" {...props}>
            {children}
        </td>
    );
}

export default TableContent;