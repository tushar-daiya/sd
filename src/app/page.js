import About from "@/components/About";
import Component4 from "@/components/Component4";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <div className="w-[241px] h-[241px] bg-green blur-[300px] -left-28 -top-28 absolute"></div>
      
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Component4 />
      <Footer />
    </div>
  );
}
