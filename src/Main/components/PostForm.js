import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import {dispatch} from 'react-redux'

class PostForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title:'',
      description:'',
    }
  }
  onButtonClickedforAdd = () => {
     this.props.sendDatafromPostForm(this.state.title,this.state.description);
     this.setState({title:'',description:'',})
  }
  render(){
    return(
      <div>
        <form
        style={{margin:'5px 0'}}>
          <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          name="title"
          style={{width:'450px'}}
          value={this.state.title}
          onChange={(e)=>{this.setState({title:e.target.value})}}
          />
          <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          name="title"
          style={{width:'450px'}}
          value={this.state.description}
          onChange={(e)=>{this.setState({description:e.target.value})}}
          />
        </form>
        <Button
           variant="contained"
           color="primary"
           onClick={this.onButtonClickedforAdd}
           >
          Add new post

        </Button>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
      sendDatafromPostForm: (title,description) => dispatch({
      type:"SEND_DATA_FROM_POSTFORM",
      payload:{title,description},
    }),
  }
};
const mapStateToProps = store => {
  return {
    myPost: store.posts.MyPost,
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostForm)
