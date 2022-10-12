import React from "react";
import { IconSearchFormButton } from "./Button.styled";

const IconButton = ({ children, onClick, ...allProps}) => {
    <IconSearchFormButton type="button" onClick={onClick} {...allProps}>
        {children}
    </IconSearchFormButton>
}

export default IconButton;
