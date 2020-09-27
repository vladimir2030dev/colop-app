import React from "react";
import {Label} from "../Label/Label";
import {Hexcode} from "../HexCode/HexCode";

const Card = (props) => {
    let styleCard = {
        width: 150,
        height: 200,
    }
    return (
        <div className="card-color" style={styleCard}>
            <Label colorHex={props.colorHex} />
            <Hexcode colorHex={props.colorHex} />
        </div>
    )
}

export default Card