import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Login } from "./components/Login";
import { User } from "./components/User";
import { Services } from './components/Services'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about-us" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="services" element={<Services />}/>
        <Route path="user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
