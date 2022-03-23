import React from 'react';
import './Counter.css';
class Counter extends React.Component {
  constructor(props){
  super(props)
  this.state = {
    value : 0
  }
}
handleAdd = () =>{
  this.setState({
    value: this.state.value + 1
  })
}
handleSubtract = () =>{
  if(this.state.value > 0){
  this.setState({
  value: this.state.value - 1,
    })
  }
}
handleReset = () =>{
  this.setState({
    value: 0
  })
}
  render() {
    return (
      <div>
        <div className='box-model'>
          <h1>{this.state.value}</h1>
          <button className='btn1' onClick={this.handleAdd}>+</button>
          <button className='btn2' onClick={this.handleSubtract}>-</button>
          <button className='fa' onClick={this.handleReset}>&#xf021;</button>
        </div>
      </div>
    )
  }
}
export default Counter;
