import React from 'react'

const Comment =(props)=>{
   return(
    <div style={{margin:"10px 10px", border:"5px solid orange", textAlign:"center"}} className="wholePost">
       <div><p style={{fontWeight:"bold"}}>title:</p><p>{props.dataPost.message}</p></div>
    </div>
  )
}
export default Comment
