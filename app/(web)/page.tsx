/* eslint-disable react/no-unescaped-entities */
// import StarsCanvas from './components/StarBackground';
import { getFeaturedRoom } from '@/libs/apis';
import PageSearch from "../components/PageSearch/PageSearch";
import CardStackScroll from "../components/cardStackScroll/cardStackScroll";
import Contact from "../components/contact/contact";
import { Container } from "../components/container";
import ImageParallax from "../components/imageParallax/imageParallax";
import HeroSection from "../components/scrollThroughWindow/HeroSection";
import Testimonials from "../components/testimonials/testimonials";
import TextScroll from "../components/textScroll/textScroll";
import VillaRoom from "../components/FeaturedRoom/FeaturedRoom";
import ImageSlider from "../components/slider/ImageSlider";
const Home = async () => {
  const featuredRoom = await getFeaturedRoom();
  console.log(featuredRoom);
  return (
    <main>
      <HeroSection />
      <Container>
        {/* add more content page on scroll bellow */}
        <ImageParallax />
        <PageSearch />
        {/* feature room, fetching data */}
        <VillaRoom {...{featuredRoom}} />
        <TextScroll />
        <ImageSlider />
        <CardStackScroll />
        <Testimonials />
        <Contact />
      </Container>
      {/* <StarsCanvas /> */}
    </main>
  );
}
export default Home;
