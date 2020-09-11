import React from 'react'

const Post =(props)=>{
   return(
    <div style={{margin:"10px 10px", textAlign:"center"}} className="wholePost" id={props.dataPost.id}>
       <div><p style={{fontWeight:"bold"}}>title:</p><p>{props.dataPost.title}</p></div>
       <div><p style={{fontWeight:"bold"}}>description:</p><p>{props.dataPost.description}</p></div>
    </div>
  )
}
export default Post
