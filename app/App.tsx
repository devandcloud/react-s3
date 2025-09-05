import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Layout
import Navbar from "./components/layout/Navbar";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About/About";
import Contact from "./pages/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div data-testid="app">
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
}

export default App;
