import React, { Component } from 'react'
import {v4 as uuidv4} from 'uuid'
import './Todo.css'
import Todo from './component/Todo'
import Login from './Login'
import  Pagination from './component/Pagination'
class TodoItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
      id:uuidv4(),
      list: [],
      editItem: false,
      strikeThrough: [],
      currentPage: 1,
      isLoggedOut: false
    }
  }
  handleLogout = ()=>{
    this.setState({
      isLoggedOut: true
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
       
       const handlePage = (num)=>{
        this.setState({
          currentPage: num
        })
     }

    
      const {list, currentPage} = this.state;
      const perPage = 3;
      const totalPages = Math.ceil(list.length / perPage)
    return (
      <div>
        {
        this.state.isLoggedOut ? (
                  <div>
                      <Login/>
                    </div>
              ) : (

      <div>
      <h2>You are Successfully Logged In</h2>
      <button className="logout" onClick={this.handleLogout}>Log Out</button>
      <div className='wrapper'>
          <h1>Todo App</h1>
          <input placeholder='Enter Skills' onChange={handleChange} value={this.state.value}/>
          <button className='addBtn' onClick={handleAddTask}>{this.state.editItem?'Edit':'Add'}</button>
          
   
          {
            list.filter((_, index) => index >= (currentPage - 1)* perPage && index < currentPage * perPage)
            .map(item => {
              return(
                <Todo key={item.id} task={item.task} handleDeleteTask={()=>handleDeleteTask(item.id)}
                handleEditTask={()=>handleEditTask(item.id)}
                handleToggleTask={handleToggleTask}/>
              )
            })
          }
          <Pagination totalPages={totalPages} handlePage={handlePage}/>
          </div>
      </div>
    )
  }
  </div>
    )
}
}
export default TodoItem;

