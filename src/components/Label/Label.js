import React from "react";

export const Label = (props) => {
    let styleLabel = {
        width: 150,
        height: 170,
        backgroundColor: props.colorHex,
        borderRadius: 5
    }
    return (
        <div style={styleLabel}>

        </div>
    )
}