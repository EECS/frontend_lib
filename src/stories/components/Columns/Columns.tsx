import React from "react";

export interface ColumnsProps {
    /**
     * Children of columns.
     */
    children: React.ReactNode;
}

export const Columns: React.FC<ColumnsProps> = (props: ColumnsProps) => {
    return(
        <div>
            {props.children}
        </div>
    )
}