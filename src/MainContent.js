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
import ProfilePosts from './Profile/ProfilePosts'


class MainContent extends React.Component {
  componentDidMount(){
  }
  render(){
    console.log(this.props.isAuth);
    let routes;
    if(!this.props.isAuth){
      routes = (
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={SignUp}/>
        </Switch>
      )
    } else {
      routes = (
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/profile' component={Profile}/>
             <Route path='/login' component={Login}>
             {(this.props.isAuth) ? <Redirect to="/" /> : <Login />}
             </Route>
             <Route path='/signup' component={SignUp}>
             {(this.props.isAuth) ? <Redirect to="/" /> : <SignUp />}
             </Route>
          <Route path='/post/:id' component={PostWithComment}/>
          <Route path='/profilepost/:id' component={ProfilePosts} />
        </Switch>
    );
  }
        return (
          <Container maxWidth="xl">

            {routes}
          </Container>
        )
   }
}
const mapStateToProps = store => {
  return {
    isAuth: store.Authorization.isAuth,
   }
}

export default connect(mapStateToProps,null)(MainContent);
