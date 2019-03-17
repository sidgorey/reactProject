
import React from 'react';
import { Typography, IconButton, Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';



class Header extends React.Component{
    render(){
        return (
            <AppBar position="static" >
            
            <Toolbar>
                <IconButton color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{flex:1 }}>{this.props.title}</Typography>
                
                <Typography color="inherit" id="userid">{this.props.userid}</Typography>

                <Button color="inherit" onClick={this.props.logout}>Logout</Button>
            </Toolbar>

            </AppBar>)
    }
}

export default Header