import React from 'react';

import { Typography, Card,  Grid,  } from '@material-ui/core';



class Todo extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            id: props.id ? props.id : 0,
            title: props.title ? props.title: "Title",
            subtitle: props.subtitle ? props.substitle : "Subtitle",
            remove: props.removal ? props.removal : () => {console.log("Not cross.")},
            dialogOpenState : false,
            titleEditMode : false,
            subTitleEditMode : false
        }

    }

   
    
   
    render(){
        
        return(<div>
        <Card className="todo" >
                
            <Grid container
                spacing={8}
                >
            
            <Grid item xs={10} onClick={() => {this.props.onEdit(this.state.id); console.log("Todo " + this.state.id)}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/></svg>
            
            <Typography variant="title" color="primary">
                <svg className="list-dot" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M0 0h24v24H0z" fill="none"/></svg>{this.props.title.substring(0,20) + (this.props.title.length > 20 ? "..." : "") }
            </Typography>
            
            {
                this.props.subtitle &&
                
               
                <Typography variant="subtitle1" color="textSecondary">
                <svg className="list-dot" xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                      {this.props.subtitle.substring(0,20)+ (this.props.subtitle.length > 20 ? "..." : "")}
                </Typography>
               
            }
            
            </Grid>
           
                <Grid item xs={2}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="remove" viewBox="0 0 30 30" width="30px" height="30px"  onClick={()=>{this.state.remove(this.state.id)}}>
                        <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/>
                    </svg>
                </Grid>
            </Grid>
        </Card>

            
            </div>);
    }
}

export default Todo