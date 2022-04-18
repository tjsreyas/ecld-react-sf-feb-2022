import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate()
  return <div>Home
      <button onClick={() => navigate('order-summary', {replace: true})}>Place order</button>
  </div>;
};
