import Image from "next/image";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Hero from "./components/pages/home/Hero";
import Ourapproach from "./components/pages/home/Ourapproach";
import Whychoose from "./components/pages/home/Whychoose";
import Ourservice from "./components/pages/home/Ourservice";
import About from "./components/pages/home/About";
import Ourmission from "./components/common/Ourmission";

export default function Home() {
  return (
    <>
      <Hero />
      <Ourapproach />
      <Whychoose />
      <Ourservice />
      <About />
    </>
  );
}
