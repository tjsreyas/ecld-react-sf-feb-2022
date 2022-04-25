import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { ViewMore } from "./components/ViewMore"
import { Students } from "./components/Students";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/students" element={<Students />} />
        <Route path="/students/:studId" element={<ViewMore />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
