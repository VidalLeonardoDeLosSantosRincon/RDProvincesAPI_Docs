import React, {Fragment} from "react";

//styles
import "./styles.css"
import "./styles_responsive.css";

export default function(props){
    return(
        <Fragment>
            <div className="ctr-navbar">
                <ul className="navbar">
                    <a href="#endpoints"><li>Endpoints</li></a>
                    <a href="#url_parameters"><li>Parameters</li></a>
                    <a href="#data_schemas"><li>Schemas</li></a>
                </ul>
            </div>
        </Fragment>
    );
}