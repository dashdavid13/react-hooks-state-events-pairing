import React, {useState} from 'react'

function Down({video}) {

    const [likes, setLikes] = useState(video.downvotes)
    
        function handleDownClick(){
            setLikes(likes - 1)
        }
        return (
          <div>
          <button onClick={handleDownClick}>{likes}👎</button>
          </div>
        );
      }
  
  export default Down;