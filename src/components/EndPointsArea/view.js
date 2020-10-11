import React, {Fragment} from "react";

//styles
import "./styles.css";
import "./styles_responsive.css";

export default function({endpoints}){
    return(
        <div className="endpoints-area" id="endpoints">
            <h4 className="subtitle">ENDPOINTS</h4>
            <hr/>
            {
                endpoints.map((endpoint,index)=>{
                    return(
                        <div key={`endpoint-box-${index}`} className="endpoint-box">
                            
                            <h4><code>{endpoint.name}</code></h4>
                            <p>{`${endpoint.description}.`}</p>
                        
                            <div className="endpoint-example-box">
                                <h5>Urls:</h5>
                                {
                                    endpoint.urls.map((url,index)=>{
                                        return(
                                            <code>{url}</code>
                                            
                                        );
                                    })
                                }
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}