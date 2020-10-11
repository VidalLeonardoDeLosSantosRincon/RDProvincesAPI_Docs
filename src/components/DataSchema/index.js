import React,{Fragment} from "react";

import View from "./view";

export const DataSchema = (props)=>{
    return(
        <Fragment>
            <View {...props}/>  
        </Fragment>
    );
} 