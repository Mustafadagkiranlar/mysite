import Navigation from "@/components/Navigation";
import About from "@/components/pages/About";
import Footer from "@/components/pages/Footer";
import Landing from "@/components/pages/Landing";
import Work from "@/components/pages/Work";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
  return (
    <div className="relative">
      <AnimatedCursor
      innerSize={20}
      outerSize={8}
      color='0, 190, 165'
      outerAlpha={0.5}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
      <Navigation />
      <Landing />
      <About />
      <Work />
      <Footer />
    </div>
  );
}
