import ReactDOM from 'react-dom';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'



class TodoTaker extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : "",
            subtitle: "",
            clickCall : props.clickCall ? props.clickCall : () => {console.log("Not got the call funciton")},
            expanded: false,
            errormsg: "",
            wrapperRef : null
        }
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleExpandedPanel = this.handleExpandedPanel.bind(this);
        this.validateFields = this.validateFields.bind(this);
        this.handleOnChangeSubtitle = this.handleOnChangeSubtitle.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this); 
        document.addEventListener('click', this.handleClickOutside, false);
        
    }
    setWrapperRef(node) {
        this.setState({
            wrapperRef : node
        })
        
    }
    
    handleClickOutside(event) {

            if(this.node == null)
            {
                return
            }
        
            if (!ReactDOM.findDOMNode(this.node).contains(event.target)) {
       
              this.setState({
                 expanded: false
              })
            }
        
      }
    handleOnChangeSubtitle(e){
        this.setState({
            subtitle: e.target.value
        })
    }
    handleOnChange(e){
      
        if(e.target.value !== null && e.target.value !== "")
        {
            this.setState({
                value: e.target.value,
                errormsg: ""
            })
        }
        else{
            this.setState({
                value : e.target.value
            });
        }
    }
    handleExpandedPanel = (panel) => (event, expanded) => {
    
        this.setState({
            expanded: panel ? expanded :false
        });
        console.log(this.state.expanded)
    }

    validateFields(e){
        if(this.state.value === null || this.state.value === "")
        {
          
            this.setState({
                errormsg: "Enter a title to start.."
            })

            return ;
        }
        this.state.clickCall(this.state.value,this.state.subtitle);
        this.setState({
                expanded: false,
                value: "",
                subtitle: ""
        }) ;
    }
    
    
    render(){

        
        return (<div id="todo-taker">
    
       
       <Grid container>
        <Grid item xs={4} ></Grid>
        <Grid item xs={4} >
        <ExpansionPanel

            ref={ node => {this.node = node}}
            expanded={this.state.expanded}
            
            onChange={this.handleExpandedPanel(true)}
           style={{minWidth : '10rem'}}
            
            >

            <ExpansionPanelSummary>
        <Grid container spacing={24}
        alignItems="center"
        >
            <Grid item xs={1}></Grid>
            <Grid item xs={9}>
                <TextField
                id="todotitle"
                label="Enter title"
                value={this.state.value}
                onChange={this.handleOnChange}
                margin="normal" 
                style={{width: '18rem'}}
                required/>
                <Typography variant="caption" id="errormsg" style={{color: '#222A68' }} >{this.state.errormsg}</Typography>
          </Grid>
          <Grid item xs={2}>
                <Fab size="small" color="primary" aria-label="Add"  onClick={(e) => {this.validateFields(e);e.stopPropagation()}}>
                    <AddIcon />
                </Fab>

          </Grid>
        </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Grid container spacing={24}>
                <Grid item xs={1}></Grid>
                <Grid item xs={11}> 
                    <TextField
                    id="subtitle"
                    fullWidth
                    label="Enter text"
                    value={this.state.subtitle}
                    onChange={this.handleOnChangeSubtitle}
                    margin="normal" 
                    style={{width: '18rem'}}
                    />
                </Grid>
            </Grid>
        </ExpansionPanelDetails>
        </ExpansionPanel>
        </Grid>
        
       </Grid>
         
        
            </div>);
    }
    
}

export default TodoTaker