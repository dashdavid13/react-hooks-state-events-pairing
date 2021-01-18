import React, {useState} from 'react'

function Up({video}) {

const [likes, setLikes] = useState(video.upvotes)

    function handleUpClick(){
        setLikes(likes +1)
    }
    return (
      <div>
      <button onClick={handleUpClick}>{likes}👍</button>
      </div>
    );
  }
  
  export default Up;