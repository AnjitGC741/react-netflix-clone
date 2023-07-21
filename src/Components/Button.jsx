import React from "react"
import "../assests/Css/Button.css"
function Button({value,iconType,color,textColor,hoverColor}){
    const btnStyle = {
        backgroundColor:color,
        color:textColor,
    };
    const handleMouseEnter = (event) => {
        event.target.style.backgroundColor = hoverColor;
      };
    
      const handleMouseLeave = (event) => {
        event.target.style.backgroundColor = color;
      };
    return(
        <button style={btnStyle} className="buttons" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <ion-icon id="icons" name={iconType}></ion-icon>
             {value}
        </button>
    );
}
export default Button;