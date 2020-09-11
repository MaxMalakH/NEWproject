import React from 'react';
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
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
// from sagas
import {connect} from 'react-redux'
import {postRequest} from '../redux/actions/actions'
import {getEmail} from '../redux/actions/actions'
import {sendDataForSignUp} from '../redux/actions/actions'
import {getFullDataAuth} from '../redux/actions/actions'

export default class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      passwrod_confirmation:'',
      first_name:'',
      last_name:'',
      }
  }
  onButtonClicked = () => {
      this.props.sendDataForSignUp(this.state.email,
      this.state.password,this.state.passwrod_confirmation,
      this.state.first_name,this.state.last_name)
      this.props.getFullDataAuth()
      this.props.history.push('/')
  }
  render () {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div >
          <Avatar >
            <LockOutlinedIcon style = {{color:'red'}}/>
          </Avatar>
          <br/>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <br/>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value = {this.state.firstName}
                  onChange = {(e)=> this.setState({first_name:e.target.value,})}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  value = {this.state.lastName}
                  onChange = {(e)=> this.setState({last_name:e.target.value,})}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value = {this.state.email}
                  onChange = {(e)=> this.setState({email:e.target.value,})}
                />
              </Grid>
              <Grid item xs={12}>
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password-confirmation"
                label="Password-confirmation"
                type="password-confirmation"
                id="password-confirmation"
                autoComplete="current-password"
                value={this.passwrod_confirmation}
                onChange={(e)=>(this.setState({passwrod_confirmation:e.target.value}))}
                />
              </Grid>
            </Grid>
            <br/>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick = {this.onButtonClicked}
            >
              Sign Up
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
  sendDataForSignUp: sendDataForSignUp,
  getFullDataAuth:getFullDataAuth,
}
SignUp = connect(null,mapDispatchToProps)(SignUp);
