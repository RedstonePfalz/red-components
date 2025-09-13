import React from "react";

type Table = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
}

/**
 * creates a table; syntax similar to HTML tables
 */
const Table: React.FC<Table> = ({ children, ...props }) => {
    return (
        <div className="my-6 w-full overflow-y-auto" {...props}>
            <table className="w-full">
                {children}
            </table>
        </div>
    );
}

export default Table;