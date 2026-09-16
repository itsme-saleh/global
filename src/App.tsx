import { useEffect } from "react";
import { site } from "./content/site";
import { BookingProvider } from "./booking/BookingContext";
import { FunnelBar } from "./components/FunnelBar";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Ticker } from "./components/Ticker";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Skills } from "./components/Skills";
import { Services } from "./components/Services";
import { Results } from "./components/Results";
import { CaseStudies } from "./components/CaseStudies";
import { Testimonials } from "./components/Testimonials";
import { WhyMe } from "./components/WhyMe";
import { Process } from "./components/Process";
import { Statement } from "./components/Statement";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BookingModal } from "./components/BookingModal";
import { MobileCta } from "./components/MobileCta";

/** Keeps document head in sync with the editable SEO config. */
function SeoSync() {
  useEffect(() => {
    document.title = site.seo.title;
    const ensure = (attr: "name" | "property", key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    ensure("name", "description", site.seo.description);
    ensure("property", "og:title", site.seo.title);
    ensure("property", "og:description", site.seo.description);
  }, []);
  return null;
}

export default function App() {
  return (
    <BookingProvider>
      <SeoSync />
      <FunnelBar />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Gallery />
        <Skills />
        <Services />
        <Results />
        <CaseStudies />
        <Testimonials />
        <WhyMe />
        <Process />
        <Statement />
        <Contact />
      </main>
      <Footer />
      <BookingModal />
      <MobileCta />
    </BookingProvider>
  );
}
