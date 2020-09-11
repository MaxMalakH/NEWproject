import React from 'react'
import {connect} from 'react-redux'
import {dispatch} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const sendPostId = (id) =>({
  type:"SEND_POST_ID",
  payload:id,
});
class ProfilePosts extends React.Component {
  constructor(props){
    super(props);
    this.IDforComment = +(this.props.location.pathname.split('/')[2]);
    this.state = {
      message:'',
      commentable_id:this.IDforComment,
      commentable_type:'Post',
      visibility: false,
    }
   }
  componentDidMount(){
   const neededId = this.props.location.pathname.split('/')[2];
   this.props.fetchIDforEdit(neededId)
   this.props.getNewComments()

   }

   onShowComments = () => {
     this.setState({visibility:!this.state.visibility,})
   }
   onButtonClickedforAdd = () => {
    this.setState({visibility:true,})
    this.props.createNewComment(this.state.message,this.state.commentable_id,this.state.commentable_type);
    this.setState({message:'',})
   }
   render() {
    let filteredComments;

    if(this.props.comments){

     filteredComments = this.props.comments.filter((item) => {
       return (item.commentable_id == this.props.location.pathname.split('/')[2]) ;
     })
     console.log(filteredComments)
    }

    return(
         <div style={{fontWeight:"bold", textAlign:"center", border:"5px solid lightgrey"}}>
           <div>User ID: {(this.props.IDisgot || {}).user_id}</div>
           <div>Created At: {(this.props.IDisgot || {}).created_at}</div>
           <Button variant="contained" color="primary" onClick={this.onShowComments}>
             Show comments
           </Button>
           <div style={{display:"inline"}}>
             <form
             style={{margin:'5px 0'}}>
               <TextField
               id="outlined-basic"
               label="Message"
               variant="outlined"
               name="title"
               style={{width:'450px'}}
               value={this.state.message}
               onChange={(e)=>{this.setState({message:e.target.value})}}
               />
             </form>
             <Button
                variant="contained"
                color="primary"
                onClick={this.onButtonClickedforAdd}>
               Add a comment
             </Button>
           </div>
           {this.state.visibility && (filteredComments || []).map(function(item){
             return(
               <div key={item.id} style={{margin:"10px 10px", textAlign:"center", border:"2px solid lightgrey"}}>
                  <div><p style={{fontWeight:"bold"}}>USER_ID:</p><p>{item.user_id}</p></div>
                  <div><p style={{fontWeight:"bold"}}>TIME_CREATED_AT</p><p>{item.created_at}</p></div>
                  <h4 style={{fontWeight:"bold", color:"lightblue",}}>Message</h4>
                  <div><p>{item.message}</p></div>
               </div>
             )
           })}
         </div>
    )
   }
 }
 const mapDispatchToProps = dispatch => {
   return {
       fetchIDforEdit: (id) => dispatch({
       type:"FETCH_ID_POST_FOR_EDIT",
       payload:id,
     }),
     getNewComments: () => dispatch({
       type:"GET_COMMENTS",
     }),
       loadCommentforPost: (id) => dispatch({
         type:"LOAD_ID_COMMENT",
         payload:id,
       }),
       createNewComment: (message,commentable_id,commentable_type) => dispatch({
       type:"CREATE_NEW_COMMENT",
       payload:{message,commentable_id,commentable_type},
     }),
   }
 };
 const mapStateToProps = store => {
   return {
     id:store.idForSend.IdForRequestingData,
     postIdF:store.idForSend.PostID,
     comments:store.posts.comments,
     IDisgot: store.idForSend.IdIsgot,
     MyComment: store.idForSend.MyComment,
   }
 }
 export default connect(mapStateToProps,mapDispatchToProps)(ProfilePosts)
