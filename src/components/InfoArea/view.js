import React from "react";

//styles
import "./styles.css";
import "./styles_responsive.css";

export default function({title, description}){
    return(
        <div className="description-area">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
}