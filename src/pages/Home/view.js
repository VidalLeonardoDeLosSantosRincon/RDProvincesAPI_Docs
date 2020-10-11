import React from "react";

//styles
import "./styles.css"; 
//data
import data from "../../data/infoAPI.json";
//components
import {InfoArea} from "../../components/InfoArea";
import {EndPointsArea} from "../../components/EndPointsArea";
import {UrlParametersArea} from "../../components/UrlParametersArea";

export default function(props){
    return(
        <div className="ctr-home">
            {console.log(data)}
            <InfoArea title={data.title} description={data.description}/>
            <EndPointsArea endpoints={data.end_points}/>
            <UrlParametersArea urlParameters={data.url_parameters}/>
        </div>
    );
}
