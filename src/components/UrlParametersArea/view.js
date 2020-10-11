import React, {Fragment} from "react";

//styles
import "./styles.css";
import "./styles_responsive.css";

export default function({urlParameters}){
    return(
        <div className="url-parameters-area" id="url_parameters">
            <h4 className="subtitle">URL PARAMETERS</h4>
            <hr/>
            {
                urlParameters.map((urlParameter,index)=>{
                    return(
                        <div key={`url-parameter-box-${index}`} className="url-parameter-box">
                            <h4>{`${urlParameter.name}`}</h4>
                            <p>{`${urlParameter.description}.`}</p>
                            <h4>Values:</h4>
                            <ul className="parameter-values">
                                {
                                    urlParameter.values.map((value, index)=>{
                                        return (
                                            <li>{value}</li>
                                        )
                                    })
                                }
                            </ul>
                            <h4>Urls examples:</h4>
                            <ul className="url-examples">
                                {
                                    urlParameter.examples.map((example, index)=>{
                                        return (
                                            <li>{example}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    );
}