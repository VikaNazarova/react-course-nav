import React from "react";

const Button = props => {
    const { component, text, ...other } = props;
    const TagName = component;

    return (
        <TagName className="btn" {...other}>{text}</TagName>
    );
  };
  
export default Button;