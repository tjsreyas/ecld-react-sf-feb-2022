import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Blog } from "./components/Blog";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
