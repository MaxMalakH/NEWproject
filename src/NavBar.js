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
import {changeAuth} from './redux/actions/actions'


class NavBar extends React.Component {
  onLogoutButton = () => {
  localStorage.clear()
  this.props.changeAuth()
 }

  render(){
    return (
      <Container maxWidth="xl">
      <div>
       <header>
        <nav>
          <ul className="navbar">
            <img alt='' style={{width:'40px', height:'40px'}}src="https://i.ya-webdesign.com/images/free-logos-png.png"/>
            {(this.props.isAuth) ? (<><Link to='/'>Main</Link>
            <Link to='/profile'>Profile</Link>
            <a onClick={this.onLogoutButton} href="/login" style={{textDecoration:'none'}}><li style={{listStyle:"none"}}>Logout</li></a></>):
            (<><Link to='/login'>Login</Link><Link to='/signup'>SignUp</Link></>)}
          </ul>
        </nav>
       </header>
      </div>
      </Container>
    )
  }
}

const mapDispatchToProps = {
 changeAuth:changeAuth,
}
const mapStateToProps = store => {
  return {
    isAuth: store.Authorization.isAuth,
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
