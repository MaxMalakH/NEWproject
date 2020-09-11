import React from 'react'
import AllPosts from './components/AllPosts'
import PostForm from './components/PostForm'
import Container from '@material-ui/core/Container'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Login from '../Login/index'

class Main extends React.Component {
  render(){
      return(
      <>
      {this.props.isAuth ? (<Container maxWidth="xl" style={{display:'flex',flexDirection:'column',
       alignItems:'center' ,border:'1px solid lightgrey'}}>
        <PostForm />
        <AllPosts />
      </Container>) : <Redirect to="/login" />
      }
      </>
    )
  }
}
const mapStateToProps = store => {
  return {
    isAuth: store.Authorization.isAuth,
  }
}
export default connect(mapStateToProps,null)(Main)
