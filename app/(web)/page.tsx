/* eslint-disable react/no-unescaped-entities */
// import StarsCanvas from './components/StarBackground';
import CardStackScroll from "../components/cardStackScroll/cardStackScroll";
import Contact from "../components/contact/contact";
import { Container } from "../components/container";
import ImageParallax from "../components/imageParallax/imageParallax";
import ScrollThroughWindow from "../components/scrollThroughWindow/scrollThroughWindow";
import Testimonials from "../components/testimonials/testimonials";
import TextScroll from "../components/textScroll/textScroll";
import VillaRoom from "../components/villaRoom/villaRoom";
export default function Home() {
  return (
    <main>
      <ScrollThroughWindow />
      <Container>
        {/* add more content page on scroll bellow */}
        <ImageParallax />
        <VillaRoom />
        <TextScroll />
        <CardStackScroll />
        <Testimonials />
        <Contact />
      </Container>
      {/* <StarsCanvas /> */}
    </main>
  );
}
