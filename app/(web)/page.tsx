// import StarsCanvas from './components/StarBackground';
import { getFeaturedRoom } from '@/libs/apis';
import PageSearch from '../components/PageSearch/PageSearch';
import SkewScroll from '../components/SkewScroll/SkewScroll';
import CardStackScroll from '../components/cardStackScroll/cardStackScroll';
import Contact from '../components/contact/contact';
import { Container } from '../components/container';
import ImageParallax from '../components/imageParallax/imageParallax';
import HeroSection from '../components/scrollThroughWindow/HeroSection';
import Testimonials from '../components/testimonials/testimonials';
import TextScroll from '../components/textScroll/textScroll';
// import InfiniteCarousel from '../components/InfiniteCarousel/InfiniteCarousel';
// import InfiniteX from '../components/InfiniteX/InfiniteX';
// import VillaRoom from '../components/FeaturedRoom/FeaturedRoom';
const Home = async () => {
  const featuredRoom = await getFeaturedRoom();
  console.log(featuredRoom);
  return (
    <main>
      <HeroSection />
      <Container>
        {/* add more content page on scroll bellow */}
        <SkewScroll />
        <PageSearch />
        {/* feature room, fetching data */}
        {/* <VillaRoom {...{ featuredRoom }} /> */}
        <TextScroll />
        <CardStackScroll />
        {/* <InfiniteX/> */}
        <ImageParallax />
        <Testimonials />
        <Contact />
      </Container>
        {/* <InfiniteCarousel /> */}
      {/* <StarsCanvas /> */}
    </main>
  );
};
export default Home;
