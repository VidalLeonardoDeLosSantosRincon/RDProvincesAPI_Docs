import React from "react";

//styles
import "./styles.css"; 
//import "./styles_responsive.css";

//data
import data from "../../data/infoAPI.json";
//components
import {InfoArea} from "../../components/InfoArea";
import {EndPointsArea} from "../../components/EndPointsArea";
import {UrlParametersArea} from "../../components/UrlParametersArea";
import { DataSchema } from "../../components/DataSchema";

export default function(props){
    return(
        <div className="ctr-home">
            {console.log(data)}
            <InfoArea title={data.title} description={data.description}/>
            <EndPointsArea endpoints={data.end_points}/>
            <UrlParametersArea urlParameters={data.url_parameters}/>            
            <div className="ctr-data-schema">
                <h5 className="subtitle">DATA SCHEMAS</h5>
                <hr/>
                <DataSchema title="FULL DATA SCHEMA" object={data.data_schema.full_response}/>
                <DataSchema title="SIMPLIFIED DATA SCHEMA" object={data.data_schema.simplified_response}/>
            </div>
        </div>
    );
}
