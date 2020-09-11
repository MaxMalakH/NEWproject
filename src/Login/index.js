import React from 'react';
import { withRouter } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch, Redirect } from 'react-router-dom';
// from sagas
import {connect} from 'react-redux'
import {postRequest} from '../redux/actions/actions'
import {getEmail} from '../redux/actions/actions'
import {getFullDataAuth} from '../redux/actions/actions'
import {dispatch} from 'react-redux'
import {changeAuthToTrue} from '../redux/actions/actions'


export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    }
}
onButtonClicked = () => {
  this.props.getEmail(this.state.email, this.state.password);
  this.props.changeAuthToTrue();
  this.props.history.push('/');

}
  render(){
     return(
       <Container component="main" maxWidth="xs">
         <CssBaseline />
         <div >
           <Avatar >
             <LockOutlinedIcon />
           </Avatar>
           <Typography component="h1" variant="h5">
             Sign in
           </Typography>
           <form  noValidate>
             <TextField
               variant="outlined"
               margin="normal"
               required
               fullWidth
               id="email"
               label="Email Address"
               name="email"
               autoComplete="email"
               autoFocus
               value={this.state.email}
               onChange={(e)=>(this.setState({email:e.target.value}))}
             />
             <TextField
               variant="outlined"
               margin="normal"
               required
               fullWidth
               name="password"
               label="Password"
               type="password"
               id="password"
               autoComplete="current-password"
               value={this.state.password}
               onChange={(e)=>(this.setState({password:e.target.value}))}
             />
             <FormControlLabel
               control={<Checkbox value="remember" color="primary" />}
               label="Remember me"
             />
             <Button
               onClick={this.onButtonClicked}
               fullWidth
               variant="contained"
               color="primary"
             >
               Sign In
             </Button>
           </form>
         </div>
       </Container>
     )
  }
}
const mapDispatchToProps = {
  postRequest:postRequest,
  getEmail:getEmail,
  getFullDataAuth:getFullDataAuth,
  changeAuthToTrue:changeAuthToTrue,
}
Login = withRouter(connect(null,mapDispatchToProps)(Login));
