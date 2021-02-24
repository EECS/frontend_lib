import React from 'react'
import "./column.css"

export interface ColumnProps {
    /**Children in Column.*/
    children: React.ReactNode | string;
    /** Size of column in grid system. Maximum size is 12. */
    size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "full";
    /** Border for column. */
    border? :{
        /**Type of border. */
        borderType: string;
        /**Color of border. */
        borderColor: string;
        /**Size of border. */
        borderSize: string;
    }
}

export const Column: React.FC<ColumnProps> = (props: ColumnProps) => {

    const border = props.border && 
    `${props.border.borderType} ${props.border.borderSize} ${props.border.borderColor}`;
    
    return (
        <div className={`Column is-${props.size}`} style={{
            border: border
        }}>
            {props.children}
        </div>
    )
}
