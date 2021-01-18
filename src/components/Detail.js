import React from 'react'
// import video from "../data/video.js";

function Detail({video}) {
    
    return (
      <div >
        <h1>{video.title}</h1>
        <p>{video.views} Views | Uploaded {video.createdAt}</p>

      </div>
    );
  }
  
  export default Detail;