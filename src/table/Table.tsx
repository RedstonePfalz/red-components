import React from "react";

interface Table {
    children: React.ReactNode;
}

/**
 * creates a table; syntax similar to HTML tables
 */
const Table: React.FC<Table> = ({ children }) => {
    return (
        <div className="my-6 w-full overflow-y-auto">
            <table className="w-full">
                {children}
            </table>
        </div>
    );
}

export default Table;