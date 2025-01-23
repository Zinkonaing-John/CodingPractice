import Image from "next/image";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
export default function Manpage() {
  return (
    <div>
      <NavBar />
      <Home />

      <About />
    </div>
  );
}
