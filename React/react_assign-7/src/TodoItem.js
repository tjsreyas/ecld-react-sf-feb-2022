import React, { Component } from 'react'
import {v4 as uuidv4} from 'uuid'
import styles from  './Todo.module.css'
import Todo from './component/Todo'
import Login from './Login'
class TodoItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
      id:uuidv4(),
      list: [],
      editItem: false,
      strikeThrough: [],
      isLoggedout: false
    }
  }

  handleLogout = ()=>{
    this.setState({
      isLoggedout : true
    })
    
  }
  render() {
    const handleChange = (event) =>{
        this.setState({
        value: event.target.value
        
      })
    }
    const handleAddTask = (event) =>{
      event.preventDefault();
      const newItem = {
        id: this.state.id,
        task: this.state.value,
        
      };
      const updatedItems = [...this.state.list, newItem];

        this.setState({
            list: updatedItems,
            value: '',
            id: uuidv4(),
            editItem: false,
            
        })
        
    }
    const handleDeleteTask = (id)=>{
      const filteredItems = this.state.list.filter(item =>
        item.id !== id);      
        this.setState ({
        list: filteredItems,
      })
    }

      const handleEditTask = (id)=>{
        const filteredItems = this.state.list.filter(item =>
            item.id !== id);
        const selectedItem = this.state.list.find(item =>
            item.id === id);
                
                this.setState({
                    list:filteredItems,
                    value: selectedItem.task,
                    id: id,
                    editItem: true
                })
                
      }
      const handleToggleTask = (event)=>{
        const element = event.target;
        element.classList.toggle("crossed-line");
       }
    
    return (
      <div>
        {
        this.state.isLoggedout ? (
                  <div>
                      <Login/>
                    </div>
              ) : (
              <div>
                <h2>You are Successfully Logged In</h2>
                <button className={styles.logout} onClick={this.handleLogout}>Log Out</button>
                <div className={styles.wrapper}>
                    <h1 className={styles.header}>Todo App</h1>
                    <input className={styles.input} placeholder='Enter Skills' onChange={handleChange} value={this.state.value}
                    />
                    <button className={styles.button} onClick={handleAddTask}>{this.state.editItem?'Edit':'Add'}</button>
             
                    {
                      this.state.list.map(item => {
                        return(
                          <Todo key={item.id} task={item.task} handleDeleteTask={()=>handleDeleteTask(item.id)}
                          handleEditTask={()=>handleEditTask(item.id)}
                          handleToggleTask={handleToggleTask}/>
                        )
                      })
                    }
                </div>
                </div>
                )
              }
        
      </div>
    )
  }
}
export default TodoItem;

