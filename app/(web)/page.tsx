/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// import StarsCanvas from './components/StarBackground';
// import './index.css';

// import TextScroll from '@/app/components/textScroll/textScroll';
import { Suspense } from 'react'
import Rooms from '@/app/(web)/rooms/page'
// import CardStackScroll from '@/app/components/cardStackScroll/cardStackScroll';
import Contact from '@/app/components/contact/contact'
// import SkewScroll from '@/app/components/SkewScroll/SkewScroll';
import Tittle1 from '@/app/components/Tittle/Tittle1'
// import { Container } from '@/app/components/container';
// import Testimonials from "@/app/components/testimonials/testimonials";
// import HeroSection from '../components/HeroScrollThroughWindow/HeroSection';
import { Container } from '../components/container'
import FeedBack from '../components/feedback/FeedBack'
import GuestsImages from '../components/GuestImageScrollUpDown/GuestsImages'
import HorizontalScrollCarousel from '../components/HorizontalScrollImage/HorizontalScrollImage'
import Hero from '../components/hero/Hero'
import Loading from '../components/loading/Loading'
import MapContact from '../components/map/MapContact'

const Home = async () => {
	return (
		<>
			<header className="overflow-x-clip">
				<Container>
					<Suspense fallback={<Loading className="" />}>
						<Hero />
					</Suspense>
				</Container>
			</header>
			<main className="overflow-x-clip">
				{/* add more content page on scroll bellow */}
				{/* <Container className='max-w-[120rem]'>
				<Suspense fallback={<Loading className='' />}>
					<HeroSection />
				</Suspense>
			</Container> */}
				<Container>
					{/* <Suspense fallback={<Loading className="" />}>
					<Hero />
				</Suspense> */}
					<Tittle1 />
					{/* <SkewScroll /> */}
					{/* <TextScroll /> */}
					<Rooms />
					{/* <Testimonials /> */}
					{/* <CardStackScroll /> */}
					{/* <ImageParallax /> */}
					<GuestsImages />
					<div className="md:hidden">
						<HorizontalScrollCarousel />
					</div>
					<FeedBack />
					<Contact />
					<MapContact />
				</Container>
			</main>
		</>
	)
}
export default Home
