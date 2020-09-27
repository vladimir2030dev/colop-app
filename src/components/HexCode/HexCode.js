import React from "react";

export const Hexcode = (props) => {
    let styleHexCode = {
        width: 150,
        height: 30,
        color: props.colorHex
    }

    return (
        <div style={styleHexCode}>
            {props.colorHex}
        </div>
    )
}