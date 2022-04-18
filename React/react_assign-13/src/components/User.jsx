import { useNavigate } from "react-router-dom"

export const User = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h2>User Successfully Logged In</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}
