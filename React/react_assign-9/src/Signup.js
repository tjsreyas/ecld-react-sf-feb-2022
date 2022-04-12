import React, { Component } from 'react'
import './Signup.css';
import Login from './Login';

const users = []
class Signup extends Component {
  constructor(){
    super()
    this.state ={
      name: '',
      age: '',
      email: '',
      department: '',
      address: '',
      married: false,
      password: '',
      confirmPassword: '',
    }
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    console.log(this.state);
    users.push(this.state)
    console.log(users);
    const { password, confirmPassword } = this.state;
    if (password === confirmPassword) {
      localStorage.setItem("users",JSON.stringify(users));
      this.setState({
        isLoggedIn: true,
        name: "",
        age: "",
        department: "",
        address: "",
        married: false,
        email: "",
        password: "",
        confirmPassword: "",
      });
      alert("Successfully Registerd");
      console.log(this.state);
    } 
    else{
        alert("Password doesnot Match");
    }
  }
    
  handleChange = (event) =>{
    const {name, value} = event.target
    this.setState({
      [name] : value
    })
  }

  handleRedirect = () =>{
    this.setState({
      isRedirect: true
    })
  }

 
  render() {
    if(this.state.isRedirect){
      return <Login/>
    }
    return (
      <div className= 'signup-container'>
          <h1>Sign Up</h1>
          <form onSubmit={this.handleSubmit}>
              <input className='signup-input' type='text' placeholder='Name' onChange={this.handleChange} name='name' value={this.state.name} required/><br/>
              <input type='number' className='signup-input' placeholder='Age' onChange={this.handleChange} name='age' value={this.state.age} required/><br/>
              <textarea placeholder='Address' className='signup-input' onChange={this.handleChange} name='address' value={this.state.address} required></textarea><br/>
              <label>Department
              <select value={this.state.department} onChange={this.handleChange} name='department' required>
                <option value="Select Department">Select Department</option>
                <option value="Marketing">Marketing</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="IT">IT</option>
              </select>
              </label><br/>
              <label className='ckeckbox'>Married
              <input  type='checkbox' onChange={this.handleChange} name='married' value={this.state.married}/><br/>
              </label>
              <br/>
              <input type='email' className='signup-input' placeholder='Email' onChange={this.handleChange} name='email' value={this.state.email} required/><br/>
              <input type='password' className='signup-input' value={this.state.password} name='password' onChange={this.handleChange} placeholder='Password' required/>
              <input type='password' className='signup-input' value={this.state.confirmPassword} name='confirmPassword' onChange={this.handleChange} placeholder='Confirm Password' required/><br/>            
              <button className='signup-btn'>Sign Up</button><br/><br/><br/>
            </form>
          <button className='redirect-btn' onClick={this.handleRedirect}>Already have an account?</button>
      </div>
    )
  }
}

export default Signup

