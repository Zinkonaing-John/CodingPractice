import Image from "next/image";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Companies from "./Components/Companies";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
export default function Manpage() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Companies />
      <Contact />
      <Footer />
    </div>
  );
}
