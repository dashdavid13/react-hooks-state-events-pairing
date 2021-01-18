import React from 'react'


function Img({video}) {

    return (
      <div>
        <iframe 
          width="919"
          height="525"
          src={video.embedUrl}
          allowfullscreen
          title={video.title}
        />
      </div>
    );
  }
  
  export default Img;