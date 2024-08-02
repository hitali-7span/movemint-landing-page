import Image from "next/image";
import Header from "../components/header";
import Hero from "../components/hero";
import Booking from "../components/booking";
import Footer from "../components/footer";
import Movers from "../components/movers";
import Contact from "../components/contact";
import Testimonials from "../components/horizontal-slider";
import Brand from "../components/brand";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Booking />
      <Movers />
      <Testimonials />
      <Brand />
      <Contact />
      <Footer />
    </main>
  );
}
