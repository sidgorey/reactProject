import React  from 'react';
import {Dialog, DialogTitle, TextField, Button, DialogContent, DialogActions} from '@material-ui/core';


class EditDialog extends React.Component{

    constructor(props){
        super(props)
        this.state={
            open: props.visible,
            title: props.task ? props.task.title : "",
            subtitle: props.task ? props.task.subtitle : "",
            titleEditMode: false,
            subTitleEditMode: false,
           
        }
        
    }
  
    componentWillReceiveProps(props){
        
            console.log("inisde component will props editDialog", props)
            this.setState({
                title: props.task ? props.task.title : "",
                subtitle: props.task? props.task.subtitle : "",
                open: props.visible

            })
     
    }
    handleDialogClose = () => {
        
        
        this.props.onClose(this.props.task.id, this.state.title , 
            this.state.subtitle )
        this.setState({
            titleEditMode : false,
            subTitleEditMode : false
        })
      }
    handleOnEditTitle = (e) => {
        this.setState({
          title: e.target.value
        })
    }
    handleOnEditSubTitle = (e) => {
      this.setState({
        subtitle: e.target.value
      })
  }
  editableTitle = ()=> {
      
      
      document.getElementById("title-tag").style.display="none"
      document.getElementById("titlesvg").style.display="none"
      document.getElementById("edittitle").style.display="inline"
      document.getElementById("title-edit-button").style.display="inline"

     
      this.setState({
        titleEditMode : true
    })
          

  }
  editableSubTitle = ()=> {
      document.getElementById("subtitle-tag").style.display = "none";
      document.getElementById("subtitlesvg").style.display="none"
      document.getElementById("editsubtitle").style.display = "inline";
      document.getElementById("subtitle-edit-button").style.display="inline";
      
      this.setState({
          subTitleEditMode : true
      })
  }
  changedTitle= () => {
      document.getElementById("title-tag").style.display = "inline-block";
      document.getElementById("edittitle").style.display = "none";
      document.getElementById("title-edit-button").style.display="none";
      document.getElementById("titlesvg").style.display="inline-block"

      this.setState({
          titleEditMode : false
      })
  }
  changedSubTitle= () => {
      document.getElementById("subtitle-tag").style.display = "inline-block";
      document.getElementById("editsubtitle").style.display = "none";
      document.getElementById("subtitle-edit-button").style.display="none";
      document.getElementById("subtitlesvg").style.display="inline-block"

      this.setState({
          subTitleEditMode : false
      })
  }

    render(){

       
        return (<Dialog
            open={this.props.visible}
            keepMounted
            fullWidth={true}
            maxWidth='xs'
            onClose={this.handleDialogClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            
            >
                <DialogTitle id="alert-dialog-slide-title">
                    <div className="dataclass" id="title-tag">{this.state.title}</div> 
                    <svg onClick={this.editableTitle} id="titlesvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15px" height="15px">
                    <path d="M 16.9375 1.0625 L 3.875 14.125 L 1.0742188 22.925781 L 9.875 20.125 L 22.9375 7.0625 C 22.9375 7.0625 22.8375 4.9615 20.9375 3.0625 C 19.0375 1.1625 16.9375 1.0625 16.9375 1.0625 z M 17.3125 2.6875 C 18.3845 2.8915 19.237984 3.3456094 19.896484 4.0214844 C 20.554984 4.6973594 21.0185 5.595 21.3125 6.6875 L 19.5 8.5 L 15.5 4.5 L 16.9375 3.0625 L 17.3125 2.6875 z M 4.9785156 15.126953 C 4.990338 15.129931 6.1809555 15.430955 7.375 16.625 C 8.675 17.825 8.875 18.925781 8.875 18.925781 L 8.9179688 18.976562 L 5.3691406 20.119141 L 3.8730469 18.623047 L 4.9785156 15.126953 z"/>
                    </svg>
                    <TextField
                        id="edittitle"
                        placeholder={this.state.title}
                        onChange={this.handleOnEditTitle}
                        margin="normal" 
                        style={{ width: '18rem', display : (this.state.titleEditMode ? 'inline' :  'none' )}}
                        />
                        <Button onClick={this.changedTitle} id="title-edit-button" style={{display : 'none'}}>Done</Button>
                </DialogTitle>
                <DialogContent>
                    <div className="dataclass" id="subtitle-tag">
                    {this.state.subtitle} </div>
                     <svg onClick={this.editableSubTitle} id="subtitlesvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15px" height="15px">
                    <path d="M 16.9375 1.0625 L 3.875 14.125 L 1.0742188 22.925781 L 9.875 20.125 L 22.9375 7.0625 C 22.9375 7.0625 22.8375 4.9615 20.9375 3.0625 C 19.0375 1.1625 16.9375 1.0625 16.9375 1.0625 z M 17.3125 2.6875 C 18.3845 2.8915 19.237984 3.3456094 19.896484 4.0214844 C 20.554984 4.6973594 21.0185 5.595 21.3125 6.6875 L 19.5 8.5 L 15.5 4.5 L 16.9375 3.0625 L 17.3125 2.6875 z M 4.9785156 15.126953 C 4.990338 15.129931 6.1809555 15.430955 7.375 16.625 C 8.675 17.825 8.875 18.925781 8.875 18.925781 L 8.9179688 18.976562 L 5.3691406 20.119141 L 3.8730469 18.623047 L 4.9785156 15.126953 z"/>
                    </svg>
                    <TextField
                        id="editsubtitle"
                        onChange={this.handleOnEditSubTitle}
                        margin="normal" 
                        placeholder={this.state.subtitle}
                        style={{width: '18rem', display : this.state.subTitleEditMode ?  'inline' :  'none'}}
                        />
                        <Button onClick={this.changedSubTitle} id="subtitle-edit-button" style={{display : 'none'}}>Done</Button>
                </DialogContent>
                <DialogActions>
                   
                </DialogActions>
            </Dialog>)
    }
}

export default EditDialog