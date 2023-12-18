/* eslint-disable react/no-unescaped-entities */
import { Container } from './components/container';
import ScrollThroughWindow from './components/scrollThroughWindow/scrollThroughWindow';
export default function Home() {
  return (
    <main>
        <ScrollThroughWindow />
      <Container>
        {/* add more content page on scroll bellow */}
        <div className='space-y-[80px] bg-blue-100 md:text-[300px]'>
          <p>Some more content</p>
          <p>So there's</p>
          <p>Some room</p>
          <p>To scroll...</p>
        </div>
      </Container>
    </main>
  );
}
