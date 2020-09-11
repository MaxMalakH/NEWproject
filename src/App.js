import React from 'react';
import './styles/App.css';
import './styles/NavBar.css'
import './'
import {connect} from 'react-redux'
import { Link, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Main from './Main'
import Profile from './Profile'
import Login from './Login'
import Post from './Main/components/Post'
import PostWithComment from './Main/components/PostWithComment'
import SignUp from './SignUp'
import Container from '@material-ui/core/Container'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined'
import MainContent from './MainContent'
import NavBar from './NavBar'

class App extends React.Component {
  componentDidMount(){
    if(this.props.isAuth ){
      this.props.getNewPost();
    }
  }
  render(){
    return(
      <div>
        <NavBar />
        <MainContent />
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

  }
};
const mapStateToProps = store => {
  return {
    isAuth: store.Authorization.isAuth,

   }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
