import React from "react";

//styles
import "./styles.css";

export default function(props){
    const year = (new Date().getFullYear().toString()==="2020")? "2020":`2020 - ${new Date().getFullYear()}`
    return(
        <footer class="footer">
            <p>
                Vidal L. De Los Santos&trade;&nbsp;
                {
                    year
                }
            </p>
        </footer>
    );
}