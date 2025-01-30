import Image from "next/image";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Hero from "./components/index/Hero";
import Ourapproach from "./components/index/Ourapproach";
import Whychoose from "./components/index/Whychoose";
import Ourservice from "./components/index/Ourservice";
import About from "./components/index/About";
import Ourmission from "./components/index/Ourmission";

export default function Home() {
  return (
    <>
      <Hero />
      <Ourapproach />
      <Whychoose />
      <Ourservice />
      <About />
      <Ourmission />
    </>
  );
}
