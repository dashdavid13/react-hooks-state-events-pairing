import React from 'react'


function Comments({comments}) {
 
  const { user, comment } = comments;
  console.log(comments)
    return (
      <div>
      <h3> 2 Comments</h3>
      <h4>{user}</h4>
      <h5>{comment}</h5>
      </div>
    );
  }
  
  export default Comments;