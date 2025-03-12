import "./App.css";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Leadership from "./components/leadership/Leadership";
import Mission from "./components/mission/Mission";
import NavBar from "./components/navbar/NavBar";
import News from "./components/news/News";

function App() {
  return (
    <main className="App">
      <NavBar />
      <Hero />
      <Mission />
      <News />
      <Leadership />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
