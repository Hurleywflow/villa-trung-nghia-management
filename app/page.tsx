/* eslint-disable react/no-unescaped-entities */
import StarsCanvas from './components/StarBackground';
import { Container } from './components/container';
import ImageParallax from './components/imageParallax/imageParallax';
import ScrollThroughWindow from './components/scrollThroughWindow/scrollThroughWindow';
export default function Home() {
  return (
    <main>
      <ScrollThroughWindow />
      <Container>
        {/* add more content page on scroll bellow */}
        <ImageParallax />
        <div className='space-y-[80px] bg-blue-100 md:text-[300px]'>
          <p>Some more content</p>
          <p>So there's</p>
          <p>Some room</p>
          <p>To scroll...</p>
        </div>
      </Container>
      <StarsCanvas />
    </main>
  );
}
