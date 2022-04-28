import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { ViewMore } from "./components/ViewMore";
import { Students } from "./components/Students";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";
import { AuthProvider } from "./components/Auth";
import { RequireAuth } from "./components/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/students" element={<RequireAuth><Students /></RequireAuth>} />
        <Route path="/students/:studId" element={<ViewMore />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
