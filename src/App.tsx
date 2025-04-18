import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Resources from "./pages/Resources";
import Events from "./pages/Events";
import Partnership from "./pages/Partnership";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Funding from "./pages/Funding";
import GetInvolved from "./pages/GetInvolved";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/events" element={<Events />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
