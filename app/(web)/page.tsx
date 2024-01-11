// import StarsCanvas from './components/StarBackground';
import { getFeaturedRoom } from '@/libs/apis';
import HeroSection from '../components/scrollThroughWindow/HeroSection';
// import InfiniteCarousel from '../components/InfiniteCarousel/InfiniteCarousel';
// import InfiniteX from '../components/InfiniteX/InfiniteX';
// import VillaRoom from '../components/FeaturedRoom/FeaturedRoom';
const Home = async () => {
  const featuredRoom = await getFeaturedRoom();
  console.log(featuredRoom);
  return (
    <main>
      <HeroSection />
      {/* <InfiniteCarousel /> */}
      {/* <StarsCanvas /> */}
    </main>
  );
};
export default Home;
