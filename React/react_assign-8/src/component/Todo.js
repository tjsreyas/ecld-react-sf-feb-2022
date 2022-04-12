import React from 'react'

const Todo = (props) => {
  
  return (
    <div>
      <li onClick={props.handleToggleTask}>{props.task}
       <i id='trash' className="fa fa-trash" onClick={props.handleDeleteTask}></i>
       <i id='edit' className="fa fa-edit" onClick={props.handleEditTask}></i>
      </li>
    </div>
  )
}
export default Todo;
