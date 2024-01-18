/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// import StarsCanvas from './components/StarBackground';
// import './index.css';
import Rooms from '@/app/(web)/rooms/page';
import ImageParallax from '@/app/components/GuestImageScrollUpDown/imageParallax';
import SkewScroll from '@/app/components/SkewScroll/SkewScroll';
import Tittle from '@/app/components/Tittle/Tittle';
import CardStackScroll from '@/app/components/cardStackScroll/cardStackScroll';
import Contact from '@/app/components/contact/contact';
import { Container } from '@/app/components/container';
import Testimonials from '@/app/components/testimonials/testimonials';
import TextScroll from '@/app/components/textScroll/textScroll';
import HeroSection from '../components/HeroScrollThroughWindow/HeroSection';
// import InfiniteCarousel from '../components/InfiniteCarousel/InfiniteCarousel';
// import InfiniteX from '../components/InfiniteX/InfiniteX';
// import VillaRoom from '../components/FeaturedRoom/FeaturedRoom';
const Home = async () => {
  return (
    <main>
      <HeroSection />
      {/* add more content page on scroll bellow */}
      <Container>
        <Tittle />
        <SkewScroll />
        <TextScroll />
        <Rooms />
        <Testimonials />
        <CardStackScroll />
        <ImageParallax />
        <Contact />
      </Container>
    </main>
  );
};
export default Home;
