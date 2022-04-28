import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";
import "./Login.css";

const defaultUser = "admin";
const defaultPassword = "admin123";

export const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const handleLogin = () => {
    auth.login(user);
    auth.login(password);
    if (user === defaultUser && password === defaultPassword) {
      navigate(redirectPath, { replace: true });
    } else {
      alert("Invalid User");
    }
  };

  return (
    <div className="login-user">
      <div>
        <h3>Login</h3>
      </div>
      <div>
        <input
          className="login-input"
          type="text"
          placeholder="Username"
          onChange={(e) => setUser(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="loginbtn-div">
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};
