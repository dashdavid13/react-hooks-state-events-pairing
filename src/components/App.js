import React from 'react'
import Img from "./Img"
import Detail from "./Detail"
import video from "../data/video.js";
import Up from "./Up"
import Down from "./Down"
import Comments from "./Comments"

function App() {
  const commentItem = video.map((comOBj) => {
    return <Comments key={comOBj.id} comments={comOBj.comments} />
  });

  return (
    <div className="App">
      <Img video={video}/>
      <Detail video={video}/>
      <Up video={video}/>
      <Down video={video}/>
      <ul>
      {commentItem}
      </ul>
      
    </div>
  );
}

export default App;
