import React from 'react'

const Todo = (props) => {
  
  return (
    <div>
      <li onClick={props.handleToggleTask}>{props.task}
       <i className="fa fa-trash" onClick={props.handleDeleteTask}></i>
       <i className="fa fa-edit" onClick={props.handleEditTask}></i>
      </li>
    </div>
  )
}
export default Todo;
