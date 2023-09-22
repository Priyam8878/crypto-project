import React from "react";

import "./style.css"

const Button =({text,onclick,outlined})=>{
    return (
        <div onClick={()=>onclick()} className={outlined?"outlined-btn": "btn"}>{text}</div>
    )
}

export default Button