import React from "react";

const Article = (data)=>{
    return(

        <article>
        <h3>{data.post} </h3>
        <small>
          {data.date} <span> {data.minutes} mins read</span>
        </small>
        <p>{data.preview}</p>
      </article>

    )
}

export default Article;
