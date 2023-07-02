import React from "react";

export const Button = ({ handleClick, text }) => (
    <button type={"submit"} onClick={handleClick}>{text}</button>
);