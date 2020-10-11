import React from "react";
import ReactJson from 'react-json-view'

//styles
import "./styles.css";
import "./styles_responsive.css";

export default function({title, object}){
    return(  
        <div className="data-schema-box" id="data_schemas">
            <h4 className="subtitle">{title}</h4>
            <hr/>
            <ReactJson style={{
                padding:"20px",    
                width: "100%",
                height: "auto",
                margin:"5px 0",
                borderRadius:"5px", 
                textAlign: "left", 
                padding: "25px 10px", 
                boxSizing: "border-box"    
            }} src={object} theme="monokai" displayDataTypes={true}/>
             <hr/>
        </div>             
        
    );
} 