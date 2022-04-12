import React, { Component } from 'react'
import TodoItem from './TodoItem';
import './Login.css';

const defaultEmail = 'admin';
const defaultPassword = 'admin123';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            isLoggedIn: false
        }
    }

    handleChange = (event)=>{
        const {name, value} = event.target;
          
        this.setState({
            [name] : value
        })
    }

    handleLogin = ()=>{
        if(this.state.email === defaultEmail && this.state.password === defaultPassword){
            this.setState({
                isLoggedIn: true
            })
        }  
        else{
            alert('Please provide valid Email and Password')
        }
    }

    
 render() {
    return (
      <div>
          {
              this.state.isLoggedIn ? (
                  <div>
                      <TodoItem/>
                    </div>
              ) : (
                <div  className= 'container'>
                <img src="./avatar.jpg" alt=""/>
                <h1>Login</h1>
                <input type="text" placeholder='Username' onChange={this.handleChange} name="email"/>
                <p></p>
                <input type="password" placeholder='Password' onChange={this.handleChange} name="password"/>
                <p></p>
                <button className='loginbtn' onClick={this.handleLogin}>Sign In</button>
            </div>
            )
          }
        </div>
    )
  }
}
 export default Login;

