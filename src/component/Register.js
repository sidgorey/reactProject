
import React from 'react';
import {Dialog, DialogTitle, AppBar, Tabs, Tab, DialogContent, TextField, Button, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import postData from '../routes/postData'
import getAllUsers from '../routes/getData'

const styles = theme => ({
    button: {
        marginTop: 40,
        marginLeft: 60,
        width: 300
    }
  });
class Register extends React.Component{

    
    constructor(props){
        super(props);
        this.state = ({
            openState : props.allow ? props.allow : true,
            tabValue : 0,
            errormsg: "",
            email: "",
            successMsg : ""
        })
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentWillReceiveProps(props)
    {
        this.setState({
            openState: props.allow ? props.allow : true
        })
    }

    handleDialogClose = () => {
        this.setState({ openState: false });
      };
    handleTabChange = (event, value) => {
        
        this.setState({
            tabValue : value
        })
    }
    handleEmailChange = (e) => {
        this.setState({
            email : e.target.value
        })
    }
    handleFormSubmit(e){
        if(this.state.tabValue === 0){
         
               getAllUsers(this.state.email,(json, err) => {
                
                if(err)
                {
                    this.setState({
                        errormsg :"Incorrect user id!"
                    })
                    return 
                }
                this.props.logIn(this.state.email)
                this.handleDialogClose()
                
            });
            
            
        }
        else{
            //Register 
            if(this.state.email != null && this.state.email.length > 0)
            {
                postData(this.state.email.toString(), (err)=>{
                    if(!err){
                        this.setState({
                            successMsg: "You have registered successfully !"
                        })
                        
                        return 
                    }
                    this.setState({
                        successMsg: "Registration failed due to server error. Pleas try again later."
                    })
                });
            }
        }
    }

    render(){
        return (<Dialog
            open={this.props.allow}
            keepMounted
            fullWidth={true}
            maxWidth='sm'
            // onClose={this.handleDialogClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    <AppBar position="static">
                        <Tabs value={this.state.tabValue} onChange={this.handleTabChange}>
                            <Tab label="LOGIN" style={{flex: 1}}/>
                            <Tab label="REGISTER" style={{flex : 1}}/>
                        </Tabs>
                    </AppBar> 
                   
                </DialogTitle>

                <DialogContent>
                    <div id="alert-dialog-slide-description"
                        style={{ padding: 30, paddingLeft: 100, paddingRight: 100 }}>
                         {this.state.tabValue === 0 && <Typography className="notifytext">{this.props.logoutMsg}</Typography>}
                    <TextField
                        id="outlined-email-input"
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        className='registerformfields'
                        value={this.state.email}
                        onChange = {this.handleEmailChange}
                        fullWidth
                        />
                        {this.state.tabValue===0 && <Typography variant="subtitle2" style={{color: 'red'}} >{this.state.errormsg}</Typography>}
                        {this.state.tabValue===1 && <Typography variant="subtitle2" style={{color: this.state.successMsg.includes("success") ? 'green' : 'red'}} >{this.state.successMsg}</Typography>}
                    

                        <Button variant="contained" color="primary" id="submit" onClick={(e) => {this.handleFormSubmit(e)}}>
                                Submit
                         </Button>   
                    </div>
                </DialogContent>
                
            </Dialog>)
    }
}

export default withStyles(styles)(Register);