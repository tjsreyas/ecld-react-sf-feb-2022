import React, { Component } from 'react'
import TodoItem from './TodoItem';
import './Login.css';
import Signup from './Signup';


class Login extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            password: "",
            isLoggedIn: false,
            isRegister: false,
        }
    }

    handleRegister = () =>{
        this.setState({
            isRegister: true
        })
    }
    
    
  render() {

    const handleChange = (event)=>{
        const {name, value} = event.target;
        this.setState({
            [name] : value
        })
    }

    const handleLogin = ()=>{
        const getSingleUser = () => {
            if (localStorage.getItem("users")){
                const localUsers = JSON.parse(localStorage.getItem("users"));
                console.log(localUsers, "localUsers");
                const singleUser = localUsers.find(
                    (item) => item.name === this.state.name
                );
                console.log(singleUser, "singleUser");
                return singleUser;
            }
        }
        const inputValidation = () => {
            if (!this.state.name || !this.state.password){
              alert("Please enter Username and Password")
              return false
            }
            return true
        }
        if (!inputValidation()) {
            return
        }
        const singleUser = getSingleUser()
        if (singleUser.password === this.state.password) {
            this.setState({
              isLoggedIn: true,
            });
        }
        else{
            alert("Please provide correct Credentials");
        }
    }
    if(this.state.isRegister){
        return <Signup/>
    }
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
                            <input className='login-input' type="text" placeholder='Username' onChange={handleChange} name="name" required/>
                            <p></p>
                            <input className='login-input' type="password" placeholder='Password' onChange={handleChange} name="password" required/>
                            <p></p>
                            <button className='loginbtn' onClick={handleLogin}>Sign In</button>
                            <p></p>
                            <button className='register-btn' onClick={this.handleRegister}><span>If Not Registered!</span>Register Here</button>
                        </div>
                    )
                }
            </div>
        )
    }
}
export default Login;

