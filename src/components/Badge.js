import React from "react";

const Badge = props => {
    const { text, ...other } = props;
    const pallete = [ '#d7373f', '#00B9FE', '#AAE3FF', '#FFE582', '#FFAF00' ]

    return (
        <span 
            className="badge" 
            style={{background: `${pallete[Math.floor(Math.random() * pallete.length)]}`}}
            {...other}
        >
            {text}
        </span>
    );
  };
  
export default Badge;