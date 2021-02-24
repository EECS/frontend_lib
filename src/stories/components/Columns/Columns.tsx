import React from "react";
import "./columns.scss"

export interface ColumnsProps {
    /**
     * Children of columns.
     */
    children: React.ReactNode;
}

export const Columns: React.FC<ColumnsProps> = (props: ColumnsProps) => {
    return(
        <div className="Columns">
            {props.children}
        </div>
    )
}