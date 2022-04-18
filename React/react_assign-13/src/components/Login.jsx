import { useNavigate } from "react-router-dom"

export const Login = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h3>LOGIN PAGE</h3>
        <div>
            Username
        <input type='text'/>
        </div>
        <div>
            Password
        <input type='password'/>
        </div>
        <button onClick={() => navigate('/user')}>Login</button>
    </div>
  )
}
