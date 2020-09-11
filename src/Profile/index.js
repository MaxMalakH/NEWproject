import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import _ from 'lodash';
import { orderBy } from 'lodash';
import ProfilePosts from './ProfilePosts'

class Profile extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
  this.props.getNewPost();
  }
  onClickPost = (event) => {

    this.props.sendPostId(event.target.id)

  }
  render(){
  let data = JSON.parse (localStorage.getItem('UserData'))
  console.log('ID',data.data.id)
  let sortedArr;
  let filteredArr;
  let authData = JSON.parse(localStorage.getItem('AuthData'))
  console.log(authData)
  if(this.props.posts){
    sortedArr = this.props.posts.filter((item) => {
  //    return (item.user_id === data.data.id);

      return (item.user_id === data.data.id);
    })
    sortedArr = _.orderBy(sortedArr,['created_at'],['desc']);
  }
      return(
      <div style={{border:"1px solid lightgrey", display:"flex", flexDirection:"column", alignItems:"center"}}>
         <div className="data">
            <h1>USER INFORMATION</h1>
            <div>{(!!JSON.parse(localStorage.getItem('UserData'))) ? (<div>Email: {data.data.email}</div>) : (<div>Bye</div>)}</div>
         </div>
         <div className="posts">
            <h4>Your Posts:</h4>
         </div>
         {(sortedArr || []).map((item)=>{

             return (
               <div key={item.id} style={{border:"3px solid lightblue", width:"400px" }}>
                <div style={{margin:"10px 10px", textAlign:"center"}} className="wholePost" >
                  <div><p style={{fontWeight:"bold"}}>title:</p><p>{item.title}</p></div>
                  <div><p style={{fontWeight:"bold"}}>description:</p><p>{item.description}</p></div>
                </div>
                <Link to={`/profilepost/${item.id}`} onClick={this.onClickPost} id={item.id} gr={item.user_id}>Edit</Link>
              </div>
             )

         })}
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getNewPost: () => dispatch({type:"GET_POST"}),
    sendPostId: (id) => dispatch({
      type:"SEND_POST_ID",
      payload:id,
    }),
    getNewComments: () => dispatch({
      type:"GET_COMMENTS",
    }),
  }
};
const mapStateToProps = store => {
  return {
    profileData:store.posts.email,
    posts: store.posts.posts,
    id:store.idForSend.IdForRequestingData,
    comments:store.posts.comments,
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Profile)
