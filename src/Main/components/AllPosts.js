import React from 'react'
import Post from './Post'
import {Link} from 'react-router-dom'
import Container from '@material-ui/core/Container'
import {connect} from 'react-redux'
import './styleForComponents.css'
import {PostWithComment} from './PostWithComment'
import {moment} from 'moment'
import _ from 'lodash';
import { orderBy } from 'lodash';

class AllPosts extends React.Component {
  constructor(props){
    super(props);
}
componentDidMount () {
  this.props.getNewPost();
}
onClickPost = (event) => {
  this.props.sendPostId(event.target.id)
}
render(){
  let arrSort;
  if(this.props.posts){
    console.log(this.props.posts)
    arrSort = _.orderBy(this.props.posts,['created_at'],['desc'])
    console.log('arrSort',arrSort)
  }
  return(
    <div className="postcontainer">
      <div style={{fontWeight:"bold", textAlign:"center"}}>Amount of posts:{(this.props.posts || []).length}</div>
       <div>
       {(arrSort || []).map((item)=>{
       return (
         <div key={item.id} id={item.id} style={{border:"5px solid lightgrey"}}>
           <Post  dataPost={item}/>
           <Link to={`/post/${item.id}`} onClick={this.onClickPost} id={item.id} gr={item.user_id}>Edit</Link>
         </div>
       )
       })}
       </div>
  </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getNewPost: () => dispatch({type:"GET_POST"}),
    getNewComments: () => dispatch({
      type:"GET_COMMENTS",
    }),
    sendPostId: (id) => dispatch({
      type:"SEND_POST_ID",
      payload:id,
    }),
  }
};
const mapStateToProps = store => {
  return {
    posts: store.posts.posts,
    id:store.idForSend.IdForRequestingData,
    myPost: store.idForSend.MyPost,
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AllPosts)
