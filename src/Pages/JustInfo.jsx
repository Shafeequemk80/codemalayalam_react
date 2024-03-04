import React from "react";
function JustInfo (props){

    console.log("RENDER JUST INFO");
    return(
        <div>
            <h1>just Info</h1>{props.activeState}
        </div>
    )
}

export default React.memo(JustInfo)