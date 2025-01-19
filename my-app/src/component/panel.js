// Panel.js
import React from "react";
import "../css/home_css.css";

const Panel = ({ children }) => {
    return <div className="panel_item">{children}</div>;
};

export default Panel;
