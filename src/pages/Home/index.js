import React, {Fragment, useState, useEffect} from "react";

//view
import View from "./view"; 

const Home = (props)=>{

    const [darkMode, setDarkMode] = useState(false);
    const [dataUrl, setDataUrl] = useState("");

    //componentDidMount
    useEffect(()=>{

    },[]);

    //componentWillUnmount
    useEffect(()=>{
        return function(){

        }
    },[]);


    return(
        <Fragment>
            <View/>
        </Fragment>
    );
}
export default Home;


