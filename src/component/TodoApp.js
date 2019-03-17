import React from 'react';
import Header from './Header'
import TodoTaker from './TodoTaker'
import TodoList from './TodoList'
import Register from './Register'
import putData from '../routes/putData';
import getAllUsers from '../routes/getData';
import { MuiThemeProvider } from '@material-ui/core';
import  EditDialog from './EditDialog';
import theme from '../themes/theme';



class TodoApp extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            tasks:[],
            title : "Todo App ",
            allow: true,
            logInId: "",
            logoutMsg : "Please login to continue" ,
            editNoteId : 0,
            editDialogVisible : false,
            maxId : 0
        }


        this.updateTasksFromLogin = this.updateTasksFromLogin.bind(this)
        this.updateTasksFromLogin(this.state.logInId)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.loginSessionCreate = this.loginSessionCreate.bind(this);
        this.updateServer = this.updateServer.bind(this)
        this.logout = this.logout.bind(this)
        this.editNoteDialog = this.editNoteDialog.bind(this)
        this.closeNoteDialog = this.closeNoteDialog.bind(this)
    }



    
    
    render(){
       
        console.log("ALl tasks",this.state.tasks)
        console.log("NoteID sleected", this.state.editNoteId)
        console.log(this.state.tasks ? this.state.tasks.filter(task => task.id === this.state.editNoteId) : 0)
        return (
        <MuiThemeProvider theme = {theme}>
            <div>
                
                <Header title={this.state.title} userid={this.state.logInId} logout={this.logout}/>
                <TodoTaker clickCall={this.handleSubmit}/>
                <TodoList tasks={this.state.tasks} removal={this.handleRemove} onEdit={this.editNoteDialog}/>
                <Register allow={this.state.allow} logIn={this.loginSessionCreate} logoutMsg={this.state.logoutMsg}/>
                <EditDialog key={this.state.editNoteId} visible={this.state.editDialogVisible} task={this.state.tasks ? this.state.tasks.filter(task => task.id === this.state.editNoteId)[0] : {}}  onClose={this.closeNoteDialog}/>

            </div>
        </MuiThemeProvider>);

    }
    logout(){
        this.setState((prevState, props) => {

           return { 
                allow: true,
                logInId: ""
           }
        })
    }
    handleSubmit(title, subtitle){
      
        console.log("Inside handle submit.", this.state.maxId)
        const newtasks = this.state.tasks;
        newtasks.push({
            id:this.state.maxId + 1,
            title:title,
            subtitle: subtitle
        });
        this.setState({
            tasks: newtasks,
            maxId: this.state.maxId + 1
        });

        
       this.updateServer(this.state.tasks)

    }
    handleRemove(id){
    
        this.setState((prevState, props) =>
        {
            let newtasks = this.state.tasks.filter( task => task.id !== id)
            this.updateServer(newtasks)
            return {tasks: newtasks}
        });
        
    }
    loginSessionCreate(userid){
        this.setState({
            logInId : userid,
            allow:false
        })
        this.updateTasksFromLogin(userid)
    }

    editNoteDialog(noteId){
        console.log("inside editnote dialog", noteId, this.state.editNoteId)
        this.setState({
            editNoteId: noteId,
            editDialogVisible: true
            
        })
    }

    closeNoteDialog(noteId, noteTitle, noteSubtitle)
    {
        
        this.setState((prevState, props) => {

            let newtasks = prevState.tasks.map(task => {
                if(task.id === noteId){
                    task.title = noteTitle;
                    task.subtitle = noteSubtitle;
                }
                return task
            })
            this.updateServer(newtasks)
            return {
                editNoteId: noteId,
                editDialogVisible: false,
                tasks: newtasks

            }
        })
        
    }

    updateServer(tasks){
      
        putData(this.state.logInId, tasks, function(err){

            if(!err)
            {
               
                return;
            }
           
        })

    }

    updateTasksFromLogin(logInId)
    {
        
        getAllUsers(this.state.logInId, (json, err) => {
           
            if(err)
            {
                console.log("Failed to load notes. Please refresh or try again later.")
                return;
            }
            this.setState({
                tasks: json.notes,
                maxId: json.notes[json.notes.length-1].id
            })
        })
    }

    
}

export default TodoApp

