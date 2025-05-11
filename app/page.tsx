
import AboutMe from "./components/AboutMe";
import BlogResources from "./components/BlogResources";
import Hero from "./components/Hero";
import KindWords from "./components/KindWords";
import MyWork from "./components/MyWork";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

export default function Home() {
  return (
    <div style={{backgroundImage: "url('/Container.svg')"}} className="bg-cover px-0 lg:px-16 h-full">
    <Navbar />
    <Hero/>
    <MyWork/>
    <KindWords/>
    <BlogResources/>
    <AboutMe/>
    <Footer/>
    </div>
  );
}
