import React from "react";

function About(data){
    return(
       <>
       <aside>
    <img src={data.image} alt="" />
    <p>{data.about}</p>
    </aside>
       </>
    )
}

export default About;