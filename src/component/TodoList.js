
import React from 'react';
import Todo from './Todo'
import Grid from '@material-ui/core/Grid';

class TodoList extends React.Component{
    
    constructor(props)
    {
        super(props)
        this.state = {
            tasks: props.tasks,
            removal: props.removal
        }
    }
   
    render(){
        let list = this.props.tasks?  this.props.tasks.map( task =>
        <Grid item xs={4} key={task.id}  className="listitem">
            <Todo id={task.id} title={task.title} subtitle={task.subtitle} onEdit={this.props.onEdit} removal={this.state.removal}/>
        </Grid>)
        : []
        return (<Grid 
                color="dominant"
                container
                spacing={8}
                alignContent="center"
                id="listcontainer"
                >
            {list}
        </Grid>);
    }
   

}
export default TodoList