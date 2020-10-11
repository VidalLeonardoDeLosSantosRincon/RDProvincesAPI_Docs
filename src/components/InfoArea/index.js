import React, {Fragment} from "react";

//view
import View from "./view"

export const InfoArea = (props)=>{
    return(
        <Fragment>
            <View {...props}/>
        </Fragment>
    );
}